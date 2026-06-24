#!/usr/bin/env bash
# Claude Code が編集したファイルを Biome で自動整形する PostToolUse フック。
# 失敗してもエージェントのループは止めない（常に exit 0）。
# 不要なら .claude/settings.json の hooks セクションを消せば無効化できる。
input="$(cat)"
file="$(printf '%s' "$input" | jq -r '.tool_input.file_path // empty' 2>/dev/null)"
[ -z "$file" ] && exit 0
case "$file" in
  *.ts | *.tsx | *.js | *.jsx | *.mjs | *.cjs | *.json | *.jsonc)
    cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0
    pnpm biome check --write "$file" >/dev/null 2>&1 || true
    ;;
esac
exit 0
