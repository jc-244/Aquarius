import pyautogui
import pyperclip
import time
import subprocess
import sys

def automation():
    print("Activating WeChat...")
    # 强制激活微信
    subprocess.run(["osascript", "-e", 'tell application "WeChat" to activate'])
    time.sleep(2)
    
    # 使用 command+1 确保主窗口焦点 (mac微信快捷键)
    pyautogui.hotkey('command', '1')
    time.sleep(1)
    
    # 连按两下 esc 退回到最干净的状态（关闭可能打开的菜单/输入框）
    print("Resetting state...")
    pyautogui.press('esc')
    time.sleep(0.5)
    pyautogui.press('esc')
    time.sleep(1)
    
    print("Opening search...")
    pyautogui.hotkey('command', 'f')
    time.sleep(1.5)
    
    print("Pasting search term...")
    pyperclip.copy("文件传输助手")
    pyautogui.hotkey('command', 'v')
    
    # 给足搜索时间
    print("Waiting for search results...")
    time.sleep(3)
    
    print("Entering chat...")
    pyautogui.press('enter')
    time.sleep(2)
    
    print("Pasting message...")
    pyperclip.copy("你好")
    pyautogui.hotkey('command', 'v')
    time.sleep(1)
    
    print("Sending message...")
    pyautogui.press('enter')
    print("Done!")

if __name__ == "__main__":
    automation()
