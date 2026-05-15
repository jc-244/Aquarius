from pathlib import Path
html = Path("app/index.html").read_text()
app = Path("app/app.js").read_text()
# Ensure all tags are properly closed starting from welcomeScreen
import re
target = r'<div class="search-box" id="searchBox" style="margin:0 !important; max-width:600px !important;">.*?<div class="chips" id="quickChips"></div>\s+</div>\s+</div>'
m = re.search(target, html, flags=re.DOTALL)
if m:
    pass
