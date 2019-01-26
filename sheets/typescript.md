---
title: TypeScript
category: JavaScript libraries
intro: |
  TypeScript is just like ES2015 with type-checking. All ES2015 (classes, etc) should work.
---

## Reference

<!-- {.-three-column} -->

### Basic types

| Type                            |
| ------------------------------- |
| `any`                           |
| `boolean`                       |
| `number`                        |
| `string`                        |
|                                 |
| `null`                          |
| `undefined`                     |
|                                 |
| `string[]` (or `Array<string>`) |
| `[string, number]` (tuple)      |
|                                 |
| `string | null` (union)         |

### Enum

```ts
enum Color {
  Red,
  Green,
  Blue = 4
}
let c: Color = Color.Green
```

### Declarations

#### Variables

```ts
let isDone: boolean
let isDone: boolean = false
```

#### Args and return

```ts
function add(a: number, b: number): number {
  return a + b
}
```

```ts
// Return type is optional
function add(a: number, b: number) {
  /* ... */
}
```

### Type assertions

```ts
let len: number = (input as string).length
```

## Interfaces

### Explicit interfaces

```ts
interface LabelOptions {
  label: string
}

function printLabel(options: LabelOptions) {
  /* ... */
}
```

### Inline interfaces

```ts
function printLabel(options: { label: string }) {
  console.log(options.label)
}

// Note the semicolon
function getUser(): { name: string; age?: number } {}
```

### Optional properties

```ts
interface User {
  name: string
  age?: number
}
```

### Read only

```ts
interface User {
  readonly name: string
}
```

### Dynamic keys

```ts
{
  [key: string]: any
}
```

## More features

### Type aliases

```ts
type Name = string | string[]
```

### Function types

```ts
function getUser(callback: (user: User) => any) {
  callback({
    /* ... */
  })
}
```

### Classes

```ts
class Point {
  x: number
  y: number
  static instances = 0
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
```

### Generics

```ts
class Greeter<T> {
  greeting: T
  constructor(message: T) {
    this.greeting = message
  }
}

let greeter = new Greeter<string>('Hello, world')
```

### Modules

```typescript
export interface User {
  /* ... */
}
```

Types and interfaces can be imported and exported just like any other JavaScript.
