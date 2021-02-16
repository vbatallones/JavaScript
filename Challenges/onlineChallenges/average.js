// Returns the average of two or more numbers.

// Use Array.prototype.reduce() to add each value to an accumulator, initialized with a value of 0, divide by the length of the array.


const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

console.log(average(...[1, 2, 3])); // 2
console.log(average(3, 4, 5)); // 4