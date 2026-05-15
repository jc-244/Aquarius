css = open("app/style.css").read()
import re
print("Matches:")
for m in re.finditer(r'\.welcome[^\{]*\{[^\}]+\}', css):
    print(m.group(0))
