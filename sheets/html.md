---
title: HTML
category: HTML
layout: 2017/sheet
---

### Head stuff

```html
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
<link rel="shortcut icon" type="image/png" href="/favicon.png" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
```

### iPhone viewport

```html
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0" />
<meta name="viewport" content="width=device-width" />
<meta
  name="viewport"
  content="width=320, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
/>
<!-- full example -->
```

### Default OpenGraph meta tags

```html
<meta content="..." name="description" />
<meta content="..." property="og:description" />
<meta content="http://.../preview.jpg" property="og:image" />
<meta content="Hello There" property="og:title" />
<meta content="Hello There" property="og:site_name" />
<meta content="hellothere" property="fb:admins" />
<meta content="website" property="og:type" />
```

### FB/Twitter

```html
<div id="fb-root"></div>
<script>
  fbAsyncInit = function() {
    FB.init({
      appId: '___APPIDGOESHERE___',
      status: true,
      cookie: true,
      xfbml: true
    })
  }
  !(function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0]
    if (!d.getElementById(id)) {
      js = d.createElement(s)
      js.id = id
      js.async = 1
      js.src = '//connect.facebook.net/en_US/all.js'
      fjs.parentNode.insertBefore(js, fjs)
    }
  })(document, 'script', 'facebook-jssdk')
</script>
```

```html
<script>
  !(function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0]
    if (!d.getElementById(id)) {
      js = d.createElement(s)
      js.id = id
      js.async = 1
      js.src = '//platform.twitter.com/widgets.js'
      fjs.parentNode.insertBefore(js, fjs)
    }
  })(document, 'script', 'twitter-wjs')
</script>
```

### HTML5 Shiv for IE8

```html
<!--[if lte IE 8
  ]><script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.1/html5shiv.js"></script
><![endif]-->
```

### H5BP HTML tag (IE8 and IE9 only)

```html
<!--[if lte IE 8]><html class="ie8"><!
[endif]-->[endif]--><!--[if IE 9]><html class="ie9"><!
[endif]--><!--[if gt IE 9]><!-->
<html>
  <!--<![endif]-->
</html>
```

### Touch icons

- apple-touch-icon-precomposed.png
- apple-touch-icon-57x57-precomposed.png
- apple-touch-icon-72x72-precomposed.png
- apple-touch-icon-114x114-precomposed.png
- apple-touch-icon-144x144-precomposed.png

### Icons

```html
<link rel="shortcut icon" type="image/png" href="favicon.png" />
<link href="apple-touch-icon-precomposed.png" rel="apple-touch-icon" />
<link
  href="apple-touch-icon-57x57-precomposed.png"
  size="57x57"
  rel="apple-touch-icon"
/>
<link
  href="apple-touch-icon-72x72-precomposed.png"
  size="72x72"
  rel="apple-touch-icon"
/>
<link
  href="apple-touch-icon-114x114-precomposed.png"
  size="114x114"
  rel="apple-touch-icon"
/>
<link
  href="apple-touch-icon-144x144-precomposed.png"
  size="144x144"
  rel="apple-touch-icon"
/>
```

Only do this if you're not placing the site in the root!

### H5BP HTML tag

```html
<!--[if lt IE 7]> <html class="ie6"> <![endif]-->
<!--[if IE 7]>    <html class="ie7"> <![endif]-->
<!--[if IE 8]>    <html class="ie8"> <![endif]-->
<!--[if IE 9]>    <html class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html class="">
  <!--<![endif]-->
</html>
```

### Unsupported message

```html
<!--[if lt IE 8]>
  <div class="unsupported-browser">
    <strong> You are using an outdated browser. </strong>
    <span>
      Please
      <a class="upgrade-browser" href="http://browsehappy.com/">
        upgrade your browser</a
      >
      or
      <a
        class="chrome-frame"
        href="http://www.google.com/chromeframe/?redirect=true"
        >activate Google Chrome Frame</a
      >
      to improve your experience.
    </span>
  </div>
<![endif]-->
```

### HTML Compatibility inspector

```html
<script src="http://ie.microsoft.com/testdrive/HTML5/CompatInspector/inspector.js"></script>
```

More info here: [microsoft.com](http://ie.microsoft.com/testdrive/HTML5/CompatInspector/)
