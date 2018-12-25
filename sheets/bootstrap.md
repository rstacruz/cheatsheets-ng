---
title: Bootstrap
prism_languages: [scss, haml, html]
weight: -1
description: |
  .container .row .col-md-6, @screen-sm-min, .form-control, grids, .modal-content, tooltips, and other Bootstrap CSS examples.
---

### Screen sizes

```
         768          992                1200
'     '     '     '     '     '     '     '     '
<---------^------------^------------------^--------->
     xs         sm              md             lg
   (phone)   (tablet)        (laptop)       (desktop)
```

#### Min:

<!-- prettier-ignore -->
```scss
@media (min-width: @screen-sm-min) // >= 768px (small tablet)
@media (min-width: @screen-md-min) // >= 992px (medium laptop)
@media (min-width: @screen-lg-min) // >= 1200px (large desktop)
```

#### Max:

<!-- prettier-ignore -->
```scss
@media (max-width: @screen-xs-max) // < 768px (xsmall phone)
@media (max-width: @screen-sm-max) // < 992px (small tablet)
@media (max-width: @screen-md-max) // < 1200px (medium laptop)
```

### Columns

```scss
.container
.container-fluid
```

```scss
.col-xs-1
.col-sm-1
.col-md-1
.col-lg-1
.col-md-offset-1
```

#### Mixins:

```scss
@include make-xs-column(12);
@include make-sm-column(6);
@include make-md-column(3);
@include make-lg-column(3);
```

```scss
@include make-sm-column-offset(1);
@include make-sm-column-push(1);
@include make-sm-column-pull(1);
```

### Utilities

```scss
.pull-left
.pull-right
```

```scss
.hidden-{xs,sm,md,lg}
.visible-{xs,sm,md,lg}
.visible-{xs,sm,md,lg,print}-{block,inline,inline-block}
```

```scss
.center-block  /* margin: auto */
.clearfix
.text-{center,left,right,justify,nowrap}
.text-{lowercase,uppercase,capitalize}
```

```scss
.show
.hidden
```

## JavaScript behaviors

### Modal

```html
<a data-toggle='modal' data-target='#new'>
```

```haml
#new.modal.fade(role='dialog')
  .modal-dialog // .modal-lg, .modal-sm
    .modal-content
      .modal-header
        %h4.modal-title hello
        %button.close{type: 'button', data: { dismiss: 'modal' }}
          %span{'aria-hidden' => true}!= "&times;"
          %span.sr-only Close
      .modal-body
        ...
      .modal-footer
        ...
```

### Modal via ajax (Rails)

#### Modal

```html
<button class='btn'
  data-toggle='modal'
  data-target='#chooseTheme'
  data-remote='/path/to/remote'
>
  Change theme
</button>
```

#### Body

```html
<div class='modal fade' id='chooseTheme'>
  <!--                      ^^^^^^^^^^^ -->
  <div class='modal-dialog modal-xl'>
    <div class='modal-content'>
      <div class='modal-header'>
        <h4 class='modal-title'>
          Choose a theme
        </h4>
      </div>
      <div class='modal-body'>
        Loading...
      </div>
    </div>
  </div>
</div>
```

This example will open the `#chooseTheme` modal on click of the button.

### Tooltip

```html
<span
  data-toggle='tooltip'
  title='tooltip'
  data-placement='left|top|bottom|right'>
```

```js
$(function() {
  $('[data-toogle~="tooltip"]').tooltip()
})
```

### Input groups

```haml
.input-group
    input.form-control(type='text')
    .input-group-addon years
```
