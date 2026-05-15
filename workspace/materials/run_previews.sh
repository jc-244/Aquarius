#!/bin/zsh
: "${OPENROUTER_API_KEY:?OPENROUTER_API_KEY is required}"
cd /Users/chenghaoxiang/Desktop/tutor agent
python3 materials/generate_previews.py > materials/previews.log 2>&1
echo "exit: $?"
