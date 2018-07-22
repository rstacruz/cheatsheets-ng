#!/usr/bin/env sh

total="$(git ls-files | grep \.md | wc -l)"
echo "Checking $total files..."

yarn run prettier:check >/dev/null
# to_update=$(echo $output | grep "success formatting" | awk '{ print $3 }')
# updated=$(echo $output | grep "unchanged" | awk '{ print $1 }')

# echo "- $updated of $total files OK."
# echo "- $to_update files need updating."
