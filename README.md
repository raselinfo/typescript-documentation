# TypeScript Documentation

> A programming language to address shortcoming of javascript

<img src="./image/1.jpg"/>

- Statically Typed

```c++
int number = 10;
number = "string" ❌ // it's not possible in Statically typed language
```

- Dynamically Typed

```js
let number = 10;
number = "string"; // it's possible in Dynamically typed language

// The problem occur when we want to do some operation with
let result = number + 5;
```

- TypeScript

```ts
let number = 10;
number = "string" ❌ // it's not possible in TypeScript
```

## Setup

```ts
npm install -g typescript // install typescript globally
tsc --init // creates a tsconfig.json file


tsc // transpile every file in the current directory
tsc index.ts // transpile a specific file
tsc --watch // transpile on change in current directory (watch changes)
```

- tsconfig.json

```json
 "target": "es2016",    // Set the JavaScript language version for emitted JavaScript and include compatible library declarations.
 "module": "commonjs",  // Specify what module code is generated.
  "rootDir": "./src",   // Specify the root folder within your source files.
    "outDir": "./dist", // Specify an output folder for all emitted files.
    "removeComments": true, // Disable emitting comments.
     "noEmitOnError": true, // Disable emitting files if any type checking errors are reported.
```
