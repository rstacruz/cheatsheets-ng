---
title: Spreadsheet functions
---

### If

```
=IF(test, then, else)
=IF(EQ(A1, "paid"), "true", "false")
```

### Comparators

| Expression  | Description           |
| ----------- | --------------------- |
| `=EQ(a,b)`  | Equal                 |
| `=NE(a,b)`  | Not equal             |
|             |                       |
| `=GT(a,b)`  | Greater than          |
| `=GTE(a,b)` | Greater than or equal |
|             |                       |
| `=LT(a,b)`  | Less than             |
| `=LTE(a,b)` | Less than or equal    |

### Math

```
=POW(2, 32)   # 2^32
=SIN() ACOS() etc
=CEILING(n,sig,mode)
=FLOOR(n,sig,mode)
=INT(n)
```

```
=SUM(range)
```

```
=SUMIF(range, criteria, sum_range)
=SUMIF(A1:A5, ">300", B1:B5)          # if A# is >300, use B#
```

### Core

```
=TO_DATE(number)
```

### Vlook

```
=VLOOKUP(value, range, column_index)
```
