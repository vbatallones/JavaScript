//  Create a function which returns the number of true values there are in an array, otherwise return 0

const countTrue = (arr) => {
    // edge case
    if (arr.length === '') {
        return 0
    } 

    let count = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count.push(arr[i])
        }
    }
    return count.length
}

console.log(countTrue([true, false, true, false, false, true, true, true])) // 5
console.log(countTrue([ false, false, false])) // 0
console.log(countTrue([])) // 0 
console.log(countTrue(['hello', 'hi', 'how', 'are', 'you', '?'])) // 0 
console.log(countTrue([1,2,3,4,5])) // 0 