#!/usr/bin/env bash
# Print files that need to be updated.
output=$(grep -l "^{:" sheets/{,*/}*.md)
if [ -z "$output" ]; then
  echo "OK" >&1
  exit 0
else
  echo "! These files need to be updated:"
  echo $output
  exit 16
fi
