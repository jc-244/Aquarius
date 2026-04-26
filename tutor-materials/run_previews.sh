#!/bin/zsh
export OPENROUTER_API_KEY="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"
cd /Users/chenghaoxiang/.openclaw/workspace
python3 tutor-materials/generate_previews.py > tutor-materials/previews.log 2>&1
echo "exit: $?"
