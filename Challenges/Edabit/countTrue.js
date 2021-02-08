//  Create a function which returns the number of true values there are in an array, otherwise return 0

const countTrue = (arr) => {

    let count = []

    for (let bool of arr) {
        if (bool === true) {
            count.push(bool)
        }
    }
    return count.length
}

// My friend showed me another solution that is a one liner, efficient, and easy to understand.
// using the filter method
const countTrue = (arr) => arr.filter(bool => bool === true).length;

console.log(countTrue([true, false, true, false, false, true, true, true])) // 5
console.log(countTrue([ false, false, false])) // 0
console.log(countTrue([])) // 0 
console.log(countTrue(['hello', 'hi', 'how', 'are', 'you', '?'])) // 0 
console.log(countTrue([1,2,3,4,5])) // 0 