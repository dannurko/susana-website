#!/usr/bin/env bash
# One-time bootstrap for a machine that will manage Susana's Wix site.
# Creates the secrets file OUTSIDE the project folder (so it never gets copied/committed).
set -euo pipefail

DIR="$HOME/.config/wix-susana"
FILE="$DIR/env"

mkdir -p "$DIR"
chmod 700 "$DIR"

if [[ -f "$FILE" ]]; then
  echo "Secrets file already exists: $FILE (not touching it)"
else
  cat > "$FILE" <<'EOF'
# Wix credentials for Susana's website — DO NOT commit, copy, or share this file.
# 1) Account owner creates the API key at https://manage.wix.com/account/api-keys
#    (permissions: All site permissions + account-level Site List read; site access: this site only)
# 2) Account ID is shown on that same page.
# 3) Site ID: run scripts/wix sites, or copy the GUID after /dashboard/ in the dashboard URL.
export WIX_API_KEY=""
export WIX_ACCOUNT_ID=""
export WIX_SITE_ID=""
EOF
  chmod 600 "$FILE"
  echo "Created $FILE (chmod 600) — fill in the three values, then run: scripts/wix doctor"
fi
