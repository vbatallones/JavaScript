## for of Loop

 statement creates a loop iterating over iterable objects, including: <mark>built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.</mark> It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

```js
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
// expected output: "a"
// expected output: "b"
// expected output: "c"

const string1 = "Levin";

for (const letters of string1) {
    console.log(letters)
}
// expected output: "L"
// expected output: "e"
// expected output: "v"
// expected output: "i"
// expected output: "n"
```