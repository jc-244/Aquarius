import re
from pathlib import Path
html = Path("app/index.html").read_text()
# Find what comes after welcomeScreen
idx = html.find('id="welcomeScreen"')
print(html[idx:idx+1500])
