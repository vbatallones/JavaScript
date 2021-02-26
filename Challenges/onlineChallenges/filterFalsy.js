// Filters out the falsy values in an array.

// Use Array.prototype.filter() to get an array containing only truthy values.

const filterFalsy = arr => arr.filter(Boolean);

console.log(filterFalsy(['', true, {}, false, undefined, 1, 0])) // [true, {}, 1]
console.log(filterFalsy(['false??', true, {}, false, 'falsy', null, []])) // [ 'false??', true, {}, 'falsy', [] ]
