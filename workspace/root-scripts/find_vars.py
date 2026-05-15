from pathlib import Path

app = Path("app/app.js").read_text()
for line in app.splitlines():
    if 'welcome-h1' in line or 'welcome-sub' in line or 'welcome-tag' in line or 'YOUR GOOD COMPANION' in line:
        print(line)
