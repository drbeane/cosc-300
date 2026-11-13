#!/bin/sh
# Sync drafts into content, build, and (with a message) commit and push.
# Usage: sh tools/publish.sh "Commit message"
cd "$(dirname "$0")/.." || exit 1
node tools/sync.mjs drafts >/dev/null || exit 1
git diff --quiet --ignore-cr-at-eol -- content/resources.md 2>/dev/null && git checkout -q -- content/resources.md 2>/dev/null
node build.mjs | tail -1 || exit 1
powershell -NoProfile -Command "Set-Content -Path dist -Stream com.dropbox.ignored -Value 1"
[ -z "$1" ] && exit 0
git add content drafts NOTES.md tools 2>/dev/null
git commit -q -m "$1

Co-Authored-By: Claude Fable 5.2 <noreply@anthropic.com>" 2>/dev/null
git push -q origin main 2>&1 | grep -v warning
git status -sb | head -3
