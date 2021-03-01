// Converts a 2D array to a comma-separated values (CSV) string.

// Use Array.prototype.map() and Array.prototype.join(delimiter) to combine individual 1D arrays (rows) into strings. 
// Use Array.prototype.join('\n') to combine all rows into a CSV string, separating each row with a newline.
// Omit the second argument, delimiter, to use a default delimiter of ,.

const arrayToCsv = (arr, delimiter = ',') => {
    
    return arr.map(x => x.map(y => `"${y}"`).join(delimiter)).join('\n')
}

console.log(arrayToCsv([['apple', 'banana'], ['grapes', 'orange']], '*'))
// "apple"*"banana"
// "grapes"*"orange"

console.log(arrayToCsv([['apple', 'banana'], ['grapes', 'orange']],))
// "apple","banana"
// "grapes","orange"

console.log(arrayToCsv([['apple', 'banana'], ['grapes', 'orange']], " "))
// "apple" "banana"
// "grapes" "orange"