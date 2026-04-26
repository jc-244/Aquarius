import pyautogui
import pyperclip
import time
import subprocess
import sys

print("Activating WeChat...")
# 唤醒微信并确保在前台
subprocess.run(["osascript", "-e", 'tell application "WeChat" to activate'])
time.sleep(2)

print("Searching...")
# 使用 pyautogui 模拟 Command + F
pyautogui.hotkey('command', 'f')
time.sleep(1.5)

# 复制搜索词并粘贴 (避免输入法中英文问题)
pyperclip.copy("文件传输助手")
pyautogui.hotkey('command', 'v')
time.sleep(3) # 多等一会等它搜索出来

# 按向下箭头选中搜索结果里的正确选项
pyautogui.press('down')
time.sleep(0.5)

# 回车进入聊天窗
pyautogui.press('enter')
time.sleep(1.5)

print("Sending message...")
# 复制发送内容并粘贴
pyperclip.copy("你好")
pyautogui.hotkey('command', 'v')
time.sleep(0.5)

# 回车发送
pyautogui.press('enter')
print("WeChat automation done!")
