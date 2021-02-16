// Returns the average of two or more numbers.

// Use Array.prototype.reduce() to add each value to an accumulator, initialized with a value of 0, divide by the length of the array.


const averageJoe = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

console.log(averageJoe(...[1, 2, 3])); // 2
console.log(averageJoe(3, 4, 5)); // 4