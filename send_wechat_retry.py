import pyautogui
import pyperclip
import time
import subprocess

print("Activating WeChat...")
subprocess.run(["osascript", "-e", 'tell application "WeChat" to activate'])
time.sleep(1.5)

# 先按一下 Esc，确保微信处于正常初始状态（退出可能的次级菜单或当前搜索）
print("Resetting state...")
pyautogui.press('esc')
time.sleep(0.5)

# 打开搜索
print("Opening search...")
pyautogui.hotkey('command', 'f')
time.sleep(1)

# 复制并粘贴搜索词
print("Pasting search term...")
pyperclip.copy("文件传输助手")
pyautogui.hotkey('command', 'v')

# 等待微信搜索出结果（系统通常默认高亮第一个结果）
time.sleep(2.5) 

# 回车直接进入聊天窗口（这次去掉多余的向下方向键盘）
print("Entering chat...")
pyautogui.press('enter')
time.sleep(1.5) 

# 粘贴消息
print("Pasting message...")
pyperclip.copy("你好")
pyautogui.hotkey('command', 'v')
time.sleep(1)

# 回车发送
print("Sending message...")
pyautogui.press('enter')
print("Done!")
