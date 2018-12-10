---
title: Vimscript snippets
category: Vim
---

### Bind function to key and command

```vim
command! YoFunctionHere call s:YoFunctionHere()
nnoremap <silent> x :call <SID>FunctionHere()<CR>

function! s:FunctionHere()
  " ...do something here
endfunction
```

### Call a function in insert mode

```vim
inoremap X <C-R>=script#myfunction()<CR>
inoremap <F2> <C-R>=MyVimFunc()?'':''<CR>
```

### Checking plugins

```
if globpath(&rtp, "plugin/commentary.vim") != ""
```

Checks if there's a `plugin/commentary.vim` in the runtime path.

### Autoload

```vim
" autoload/hello.vim
if exists("g:hello_loaded") | finish | endif
let g:hello_loaded=1

function hello#method()
endfunction
```

Calling `hello#method()` will load autoload the script.

### Version checking

```vim
if version < 704
  echom "requires vim >= 7.4"
endif
```
