import re
from pathlib import Path
html = Path("app/index.html").read_text()
html = html.replace('padding:40px;', 'padding:40px; margin-top:-8vh;') # Slightly nudge the whole block up smoothly against center since it's a bit rigid
Path("app/index.html").write_text(html)

css_path = Path("app/style.css")
css = css_path.read_text()
css = css.replace('.welcome-inner {', '/* .welcome-inner */')
css = css.replace('.welcome-h1 { margin-top: auto; flex:1;}', '/* welcome h1 margin cleared */')
css_path.write_text(css)
