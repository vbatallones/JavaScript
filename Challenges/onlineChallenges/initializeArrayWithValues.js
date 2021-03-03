// Use Array(n) to create an array of the desired length, fill(v) to fill it with the desired values.
//  You can omit val to use a default value of 0.

const initializeThisValues = (num, value = 0) => Array(num).fill(value);


console.log(initializeThisValues(1, "I")) //[ 'I' ]
console.log(initializeThisValues(4,"LOVE")) //[ 'LOVE', 'LOVE', 'LOVE', 'LOVE' ]
console.log(initializeThisValues(3,"JavaScript")) //[ 'JavaScript', 'JavaScript', 'JavaScript' ]
console.log(initializeThisValues(4,20)) //[ 20, 20, 20, 20 ]
console.log(initializeThisValues(5)) // [ 0, 0, 0, 0, 0 ]