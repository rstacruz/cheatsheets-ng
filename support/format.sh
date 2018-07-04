#!/usr/bin/env bash
perl -p -i -e 's/^{:(.*?)}$/<!-- {$1} -->/g' sheets/{,*/}*.md
