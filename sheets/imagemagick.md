---
title: Imagemagick
---

### Common options

| Options             | Description                     |
| ------------------- | ------------------------------- |
| `-resize 100x40`    | Resize                          |
| ---                 | ---                             |
| `-crop 40x30+10+10` | Crop (`WIDTHxHEIGHT+X+Y`)       |
| `-crop 40x30-10-10` | Crop (`WIDTHxHEIGHT-X-Y`)       |
| ---                 | ---                             |
| `-flip`             | Flip vertical                   |
| `-flop`             | Flip horizontal                 |
| `-transpose`        | Flip vertical + rotate 90deg    |
| `-transverse`       | Flip horizontal + rotate 270deg |
| ---                 | ---                             |
| `-rotate 90`        | Rotate 90 degrees               |
| `-trim`             | Trim image edges                |

### Resize to fit

```bash
convert input.jpg \
  -resize 80x80^ \
  -gravity center \
  -extent 80x80 \
  icon.png
```

This resizes to `80x80`, fit to cover.

### Convert all images to another format

```bash
mogrify -format jpg -quality 85 *.png
```

This converts all `jpg` to `png`.

### Make a pdf

```bash
convert *.jpg hello.pdf
```

Converts a jpeg to PDF.

### References

* <http://www.noah.org/wiki/ImageMagick>
