#!/usr/bin/env python3
"""
四川雷达CR数据时间序列长度统计分析
- 反射率 > 20 dBZ 判定为有降水
- 间隔相同且连续的文件为一组时间序列
"""

import os
import sys
import bz2
import struct
import re
from datetime import datetime
from collections import defaultdict

DATA_DIR = "/Volumes/PortableSSD/HAinSC"
OUTPUT_FILE = os.path.expanduser("~/Desktop/学姐数据解压/云贵川/四川时间序列统计.csv")

def read_radar_file(filepath):
    """读取雷达文件，返回是否有降水(反射率>20dBZ的像素数)"""
    try:
        with open(filepath, 'rb') as f:
            data = bz2.decompress(f.read())
        
        count_gt20 = 0
        total = 0
        for i in range(0, len(data), 2):
            v = struct.unpack('<h', data[i:i+2])[0]
            if v != -32768 and v != 0:
                total += 1
                if v > 20:
                    count_gt20 += 1
        
        return count_gt20 > 0, count_gt20
    except Exception as e:
        return None, 0

def analyze_cr_folder(cr_path):
    """分析一个CR文件夹，返回时间序列长度列表"""
    folder_name = os.path.basename(os.path.dirname(cr_path))
    
    # 获取所有.bin文件并提取时间戳
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
        has_precip_flag, count = read_radar_file(filepath)
        has_precip.append((ts, ts_str, has_precip_flag, count))
    
    # 找有降水的时间序列（间隔相同且连续）
    sequences = []
    i = 0
    while i < len(has_precip):
        if has_precip[i][2] is None:  # 读取失败
            i += 1
            continue
        
        # 开始一个新序列（要求有降水）
        if not has_precip[i][2]:
            i += 1
            continue
        
        # 找连续的有降水序列
        seq_start = i
        seq_times = [has_precip[i][0]]
        i += 1
        
        while i < len(has_precip):
            if has_precip[i][2] is None:
                i += 1
                continue
            
            if not has_precip[i][2]:
                break
            
            # 检查时间间隔
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
    print(f"输出文件: {OUTPUT_FILE}")
    
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
    folder_stats = []
    
    for idx, cr_folder in enumerate(cr_folders):
        folder_name = os.path.basename(os.path.dirname(cr_folder))
        if (idx + 1) % 50 == 0:
            print(f"处理中: {idx + 1}/{len(cr_folders)} - {folder_name}")
        
        sequences = analyze_cr_folder(cr_folder)
        all_sequences.extend(sequences)
        
        if sequences:
            folder_stats.append({
                'folder': folder_name,
                'file_count': len([f for f in os.listdir(cr_folder) if f.endswith('.bin')]),
                'sequence_count': len(sequences),
                'total_length': sum(sequences),
                'max_length': max(sequences),
                'avg_length': sum(sequences) / len(sequences)
            })
    
    print(f"\n分析完成！共发现 {len(all_sequences)} 个有降水的时间序列")
    
    # 统计长度频率分布
    length_freq = defaultdict(int)
    for seq_len in all_sequences:
        length_freq[seq_len] += 1
    
    # 排序
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
        
        f.write(f"\n")
        f.write(f"总序列数,{total}\n")
        f.write(f"最短序列,{min(length_freq.keys())}\n")
        f.write(f"最长序列,{max(length_freq.keys())}\n")
        f.write(f"平均长度,{total/len(length_freq):.2f}\n")
    
    print(f"\n统计结果已保存到: {OUTPUT_FILE}")
    
    # 打印摘要
    print("\n=== 时间序列长度频率分布(前20) ===")
    print(f"{'长度':<8}{'次数':<10}{'占比':<10}")
    for length, count in sorted_freq[:20]:
        print(f"{length:<8}{count:<10}{count/total*100:.2f}%")
    
    if len(sorted_freq) > 20:
        print(f"... 共 {len(sorted_freq)} 种不同长度")
    
    return sorted_freq, all_sequences

if __name__ == "__main__":
    main()
