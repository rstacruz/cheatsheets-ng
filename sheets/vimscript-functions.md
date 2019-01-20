---
title: Vimscript functions
category: Vim
---

### Dictionaries

```vim
let colors = {
  \ "apple": "red",
  \ "banana": "yellow"
}
```

```vim
echo colors["a"]
echo get(colors, "apple")   " suppress error
```

```vim
remove(colors, "apple")
```

```vim
" :help E715
if has_key(dict, 'foo')
if empty(dict)
keys(dict)
len(dict)
```

```vim
max(dict)
min(dict)
```

```vim
count(dict, 'x')
string(dict)
```

```vim
map(dict, '<>> " . v:val')
extend(s:fruits, { ... })
```

```vim
for key in keys(mydict)
  echo key . ': ' . mydict(key)
endfor
```

### Lists

```vim
let mylist = [1, two, 3, "four"]

let first = mylist[0]
let last  = mylist[-1]

" Suppresses errors
let second = get(mylist, 1)
let second = get(mylist, 1, "NONE")
```

### Buffer

```vim
line('.')             " current line number
col('.')
col('$')
```

```vim
getline('.')          " current line as a string
getline(1)            " get line 1
getline(1, 5)         " get lines 1-5
search('^$')          " next blank line, returns line number
search('^$','n')      " but don't move cursor
```

```vim
getcurpos()           " [bufnum, lnum, col, off, curswant]
getpos('.')           " [bufnum, lnum, col, off]
```

```vim
nextnonblank(1)       " next non-blank line after line1
prevnonblank()
```

### Marks

```vim
getpos("'a")          " position of a mark
setpos("'a",...)
```

```vim
getpos("'<")          " position of selection start
```

### Cursor

```vim
cursor(line,col)      " moves cursor
cursor(line,col,off,curswant)
```

```vim
getcurpos()           " returns [bufnum,line,col,off,curswant]
```

### Expand

```vim
expand('<cword>')      " word under cursor
expand('%')            " current file
```

```vim
" <cword>  current word on cursor
" :p    full path
" :h    head
" :p:h  dirname   (/Users/rsc/project)
" :t    tail      (file.txt)
" :r    root      (file)
" :e    extension (.txt)
" see :h cmdline-special
```

### Files

```vim
fnameescape('string')
fnamemodify('main.c', ':p:h')
fnamemodify(fname, ':e')   " current file extension - see expand()
filereadable(fname)
getfsize('file.txt')
getcwd()
```

```vim
globpath(&rtp, "plugin/commentary.vim")
```

### Math

```vim
fmod(9, 2)  " modulus
abs(-0.5)
sqrt(9)
```

```vim
trunc(1.84)
floor(1.84)
ceil(1.84)
float2nr(3.14)
```

### Casting

```vim
str2float('0.2')
str2nr('240')
str2nr('ff', '16')
```

```vim
string(0.3)
```

### Type checking

```vim
type(var) == type(0)
type(var) == type("")
type(var) == type(function("tr"))
type(var) == type([])
type(var) == type({})
type(var) == type(0.0)
```

### Date/time

```vim
strftime('%c')
strftime('%c',getftime('file.c'))
```

### Strings

```vim
if a =~ '\s*'
substitute(str, '.', 'x', 'g')
strpart("abcdef", 3, 2)    " == "de" (substring)
strpart("abcdef", 3)       " == "def"
stridx("abcdef", "e")      " == "e"
strridx()                  " reverse
```

```vim
matchstr('testing','test')  " == 'test' (or '')
match('testing','test')     " == 0
matchend('testing','test')  " == 4
match('testing','\ctest')   " ignore case
```

```vim
split(str, '\zs')           " split into characters
```

```vim
strlen(str)
strchars()                  " accounts for composing chars
strwidth()                  " accounts for ambig characters
strdisplaywidth()           " accounts for tab stops
```

```vim
toupper(str)
tolower(str)
tr('foo', '_-', '  ')
```

### Syntax

```vim
synstack(line('.'),col('.'))   " returns many
synID(line('.'),col('.'),1)    " only one
```

```vim
synIDattr(id,"bg")
synIDattr(id,"name")
synIDtrans()
```

```vim
" syntax stack
map(synstack(line('.'), col('.')), 'synIDattr(v:val, "name")')
```

### Shell

```vim
system('ls '.shellescape(expand('%:h')))
```

### Registers

```vim
getreg('*')
getregtype('*')     " v(char), V(line) <ctrl-v>(block)
```

### Comparisons

```vim
if name ==# 'John'     " case-sensitive
if name ==? 'John'     " case-insensitive
if name == 'John'      " depends on :set ignorecase
" also: is#, is?, >=#, >=?, and so on
```

```vim
if "hello" =~ '.*'
if "hello" !~ '.*'
```

### Running commands

```vim
normal 'ddahello'
exe 'normal ^C'  " with expansions
wincmd J
```
