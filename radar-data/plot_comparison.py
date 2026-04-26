#!/usr/bin/env python3
"""云贵川冰雹降水时间序列长度分布对比图"""

import os

# 读取数据
def read_csv(path):
    data = []
    with open(path, 'r', encoding='utf-8') as f:
        for line in f:
            parts = line.strip().split(',')
            if len(parts) >= 2 and parts[0].isdigit():
                length = int(parts[0])
                count = int(parts[1])
                data.append((length, count))
    return data

base = os.path.expanduser("~/Desktop/学姐数据解压/云贵川")
sichuan = read_csv(f"{base}/四川时间序列统计.csv")
yunnan = read_csv(f"{base}/云南时间序列统计.csv")
guizhou = read_csv(f"{base}/贵州时间序列统计.csv")

# 获取长度范围
all_lengths = sorted(set([l for l, c in sichuan] + [l for l, c in yunnan] + [l for l, c in guizhou]))
max_len = min(50, max(all_lengths))  # 只显示到50

# 构建频率字典
def to_dict(data):
    return {l: c for l, c in data}

s_dict = to_dict(sichuan)
y_dict = to_dict(yunnan)
g_dict = to_dict(guizhou)

# 打印文本直方图
print("=" * 70)
print("云贵川冰雹降水时间序列长度分布对比")
print("（横轴：序列长度/文件数，纵轴：出现次数）")
print("=" * 70)

# 简化版文本直方图（长度1-50）
print("\n长度  四川    云南    贵州")
print("-" * 50)
for length in range(1, max_len + 1):
    s = s_dict.get(length, 0)
    y = y_dict.get(length, 0)
    g = g_dict.get(length, 0)
    bar_s = '█' * (s // 10) if s > 0 else ''
    bar_y = '▓' * (y // 10) if y > 0 else ''
    bar_g = '◆' * (g // 20) if g > 0 else ''
    print(f"{length:4d}  {s:5d}{bar_s}  {y:5d}{bar_y}  {g:5d}{bar_g}")

print("-" * 50)
print("图例: █=四川  ▓=云南  ◆=贵州")

# 统计摘要
print("\n" + "=" * 70)
print("统计摘要")
print("=" * 70)

for name, data in [("四川", sichuan), ("云南", yunnan), ("贵州", guizhou)]:
    total = sum(c for l, c in data)
    max_len_data = max(l for l, c in data)
    mode_len = max(data, key=lambda x: x[1])
    print(f"\n{name}:")
    print(f"  总序列数: {total}")
    print(f"  最长序列: {max_len_data} (约{max_len_data*10}分钟 = {max_len_data*10/60:.1f}小时)")
    print(f"  最常见长度: {mode_len[0]} (出现{mode_len[1]}次)")
    
    # 计算14-16的占比
    cnt_14_16 = sum(c for l, c in data if 14 <= l <= 16)
    pct = cnt_14_16 / total * 100
    print(f"  14-16长度占比: {cnt_14_16}/{total} = {pct:.1f}%")

print("\n" + "=" * 70)
print("分析完成！数据来源：PortableSSD/HAinGZ, HAinSC, HAinYN")
print("=" * 70)
