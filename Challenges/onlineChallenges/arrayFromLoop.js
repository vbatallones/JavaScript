// Converting string to an array, loop through the converted array, and concatenate a string through the array.


const arrFrom = (value = 'coding') => {
    return Array.from(value, function (stri) {
        return `${stri}, I'm concatenating`
    })
}

console.log(arrFrom('abc'))
// [
//     "a, I'm concatenating",
//     "b, I'm concatenating",
//     "c, I'm concatenating"
// ]
console.log(arrFrom())
// [
//     "c, I'm concatenating",
//     "o, I'm concatenating",
//     "d, I'm concatenating",
//     "i, I'm concatenating",
//     "n, I'm concatenating",
//     "g, I'm concatenating"
// ]
console.log(arrFrom('BANANA'))
// [
//     "B, I'm concatenating",
//     "A, I'm concatenating",
//     "N, I'm concatenating",
//     "A, I'm concatenating",
//     "N, I'm concatenating",
//     "A, I'm concatenating"
// ]