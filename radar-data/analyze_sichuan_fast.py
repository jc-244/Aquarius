#!/usr/bin/env python3
"""
四川雷达CR数据时间序列长度统计分析 - 优化版
"""

import os
import sys
import bz2
import struct
import re
from datetime import datetime
from collections import defaultdict
import subprocess

DATA_DIR = "/Volumes/PortableSSD/HAinSC"
OUTPUT_FILE = os.path.expanduser("~/Desktop/学姐数据解压/云贵川/四川时间序列统计.csv")

def check_precipitation_fast(filepath):
    """快速检查是否有降水（反射率>20dBZ）"""
    try:
        # 使用系统bzip2解压到临时文件
        import tempfile
        with tempfile.NamedTemporaryFile(delete=False) as tmp:
            tmp_path = tmp.name
        
        subprocess.run(['bunzip2', '-c', filepath], stdout=open(tmp_path, 'wb'), 
                       stderr=subprocess.DEVNULL, check=True, timeout=30)
        
        # 读取并检查
        with open(tmp_path, 'rb') as f:
            data = f.read()
        
        os.unlink(tmp_path)
        
        # 检查是否有>20的值
        has_precip = False
        for i in range(0, len(data) - 1, 2):
            v = struct.unpack('<h', data[i:i+2])[0]
            if v > 20:
                has_precip = True
                break
        
        return has_precip
    except Exception as e:
        return None

def analyze_cr_folder(cr_path):
    """分析一个CR文件夹，返回时间序列长度列表"""
    # 获取所有.bin文件
    files_info = []
    for f in os.listdir(cr_path):
        if f.endswith('.bin'):
            match = re.search(r'RADR_CR_(\d{12})\.bin', f)
            if match:
                ts_str = match.group(1)
                ts = datetime.strptime(ts_str, "%Y%m%d%H%M")
                files_info.append((ts, ts_str, os.path.join(cr_path, f)))
    
    if len(files_info) < 2:
        return []
    
    # 按时间排序
    files_info.sort(key=lambda x: x[0])
    
    # 检查每个文件是否有降水
    has_precip = []
    for ts, ts_str, filepath in files_info:
        has_precip_flag = check_precipitation_fast(filepath)
        has_precip.append((ts, has_precip_flag))
    
    # 找有降水的时间序列（间隔相同且连续）
    sequences = []
    i = 0
    while i < len(has_precip):
        if has_precip[i][1] is None or not has_precip[i][1]:
            i += 1
            continue
        
        # 开始一个新序列
        seq_times = [has_precip[i][0]]
        i += 1
        
        while i < len(has_precip):
            if has_precip[i][1] is None or not has_precip[i][1]:
                break
            delta = (has_precip[i][0] - seq_times[-1]).total_seconds() / 60
            if delta != 10:
                break
            seq_times.append(has_precip[i][0])
            i += 1
        
        if len(seq_times) >= 1:
            sequences.append(len(seq_times))
    
    return sequences

def main():
    print("开始分析四川雷达CR数据...")
    print(f"数据目录: {DATA_DIR}")
    print(f"输出文件: {OUTPUT_FILE}\n")
    
    # 收集所有CR文件夹
    cr_folders = []
    for root, dirs, files in os.walk(DATA_DIR):
        if "CR" in dirs:
            cr_path = os.path.join(root, "CR")
            cr_folders.append(cr_path)
    
    cr_folders.sort()
    print(f"共找到 {len(cr_folders)} 个CR文件夹\n")
    
    # 统计序列长度频率
    all_sequences = []
    
    for idx, cr_folder in enumerate(cr_folders):
        folder_name = os.path.basename(os.path.dirname(cr_folder))
        print(f"[{idx+1}/{len(cr_folders)}] 处理: {folder_name}", end='\r')
        
        sequences = analyze_cr_folder(cr_folder)
        all_sequences.extend(sequences)
    
    print(f"\n\n分析完成！共发现 {len(all_sequences)} 个有降水的时间序列")
    
    # 统计长度频率分布
    length_freq = defaultdict(int)
    for seq_len in all_sequences:
        length_freq[seq_len] += 1
    
    sorted_freq = sorted(length_freq.items(), key=lambda x: x[0])
    
    # 写CSV
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write("序列长度,出现次数,占比(%),累计次数,累计占比(%)\n")
        
        total = len(all_sequences)
        cumsum = 0
        for length, count in sorted_freq:
            pct = count / total * 100
            cumsum += count
            cumsum_pct = cumsum / total * 100
            f.write(f"{length},{count},{pct:.2f},{cumsum},{cumsum_pct:.2f}\n")
        
        f.write(f"\n总序列数,{total}\n")
        f.write(f"最短序列,{min(length_freq.keys())}\n")
        f.write(f"最长序列,{max(length_freq.keys())}\n")
        f.write(f"平均长度,{total/len(length_freq):.2f}\n")
    
    print(f"统计结果已保存到: {OUTPUT_FILE}")
    
    # 打印摘要
    print("\n=== 时间序列长度频率分布 ===")
    print(f"{'长度':<8}{'次数':<10}{'占比':<10}")
    for length, count in sorted_freq:
        print(f"{length:<8}{count:<10}{count/total*100:.2f}%")
    
    return sorted_freq, all_sequences

if __name__ == "__main__":
    main()
