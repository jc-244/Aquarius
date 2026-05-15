#!/bin/zsh
: "${OPENROUTER_API_KEY:?OPENROUTER_API_KEY is required}"
cd /Users/chenghaoxiang/Desktop/tutor agent/materials
python3 generate_new_book_meta.py > new-book-meta.log 2>&1
echo "Done: $?"
