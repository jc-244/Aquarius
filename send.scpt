tell application "WeChat" to activate
delay 1

tell application "System Events"
    set frontmost of process "WeChat" to true
    delay 0.5
    
    -- 打开搜索
    keystroke "f" using command down
    delay 1
    
    -- 输入搜索词
    set the clipboard to "文件传输助手"
    keystroke "v" using command down
    
    -- 多等一会儿，让微信加载出搜索结果
    delay 3
    
    -- 关键：按“向下”方向键选中出来的第一个搜索结果
    key code 125
    delay 0.5
    
    -- 回车，进入聊天界面
    key code 36
    
    -- 等待聊天界面加载
    delay 1.5
    
    -- 输入：你好
    set the clipboard to "你好"
    keystroke "v" using command down
    delay 0.5
    
    -- 回车发送
    key code 36
end tell
