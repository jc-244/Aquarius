#!/usr/bin/env python3
"""贵州雷达CR数据 - 时间序列长度统计"""

import os
import bz2
import struct
import re
from datetime import datetime
from collections import defaultdict
import sys

DATA_DIR = "/Volumes/PortableSSD/HAinGZ"
OUTPUT_FILE = os.path.expanduser("~/Desktop/学姐数据解压/云贵川/贵州时间序列统计.csv")

def check_precip(filepath):
    """检查文件是否有反射率>20dBZ"""
    try:
        with open(filepath, 'rb') as f:
            data = bz2.decompress(f.read())
        
        for i in range(0, len(data) - 1, 2):
            v = struct.unpack('<h', data[i:i+2])[0]
            if v > 20:
                return True
        return False
    except:
        return None

def analyze_folder(cr_path):
    """分析一个CR文件夹"""
    files = []
    for f in os.listdir(cr_path):
        if f.endswith('.bin'):
            m = re.search(r'RADR_CR_(\d{12})\.bin', f)
            if m:
                ts = datetime.strptime(m.group(1), "%Y%m%d%H%M")
                files.append((ts, os.path.join(cr_path, f)))
    
    if len(files) < 2:
        return []
    
    files.sort(key=lambda x: x[0])
    
    # 检查每个文件
    precip = []
    for ts, path in files:
        precip.append((ts, check_precip(path)))
    
    # 找连续的有降水序列
    sequences = []
    i = 0
    while i < len(precip):
        if precip[i][1] is None or not precip[i][1]:
            i += 1
            continue
        
        seq = [precip[i][0]]
        i += 1
        
        while i < len(precip):
            if precip[i][1] is None or not precip[i][1]:
                break
            if (precip[i][0] - seq[-1]).total_seconds() != 600:  # 10分钟=600秒
                break
            seq.append(precip[i][0])
            i += 1
        
        sequences.append(len(seq))
    
    return sequences

def main():
    sys.stdout.write("开始分析贵州雷达数据...\n")
    sys.stdout.flush()
    
    # 找所有CR文件夹
    cr_folders = []
    for root, dirs, files in os.walk(DATA_DIR):
        if "CR" in dirs:
            cr_folders.append(os.path.join(root, "CR"))
    
    cr_folders.sort()
    total_folders = len(cr_folders)
    sys.stdout.write(f"共 {total_folders} 个CR文件夹\n\n")
    sys.stdout.flush()
    
    all_seqs = []
    
    for idx, folder in enumerate(cr_folders):
        name = os.path.basename(os.path.dirname(folder))
        sys.stdout.write(f"[{idx+1}/{total_folders}] {name}..." + " " * 20 + "\r")
        sys.stdout.flush()
        
        seqs = analyze_folder(folder)
        all_seqs.extend(seqs)
    
    sys.stdout.write("\n\n")
    
    # 统计长度频率
    freq = defaultdict(int)
    for s in all_seqs:
        freq[s] += 1
    
    sorted_freq = sorted(freq.items())
    total = len(all_seqs)
    
    # 写CSV
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write("序列长度,出现次数,占比%,累计次数,累计占比%\n")
        cumsum = 0
        for length, count in sorted_freq:
            pct = count / total * 100
            cumsum += count
            cumsum_pct = cumsum / total * 100
            f.write(f"{length},{count},{pct:.2f},{cumsum},{cumsum_pct:.2f}\n")
        
        f.write(f"\n总序列数,{total}\n")
        f.write(f"最短,{min(freq.keys())}\n")
        f.write(f"最长,{max(freq.keys())}\n")
        f.write(f"平均,{total/len(freq):.2f}\n")
    
    sys.stdout.write(f"完成！共 {total} 个有降水序列\n")
    sys.stdout.write(f"结果保存到: {OUTPUT_FILE}\n\n")
    sys.stdout.write("=== 长度频率分布 ===\n")
    sys.stdout.write(f"{'长度':<8}{'次数':<10}{'占比':<10}\n")
    for length, count in sorted_freq:
        sys.stdout.write(f"{length:<8}{count:<10}{count/total*100:.2f}%\n")
    sys.stdout.flush()

if __name__ == "__main__":
    main()
