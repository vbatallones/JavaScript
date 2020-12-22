// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!

function steps(n) {
    // from 0 to n (iterate first on the row)
    for (let row = 0; row < n; row++) {
        // create a stair variable and set it into empty string
        let stair = ''
        //from 0 to n (iterate now on the column)
        for (let column = 0; column < n; column++) {
            // if the column is less than or equal to row
            if (column <= row) {
                // set the stair to '#' 
                stair += '#'
            } else {
                // otherwise 
                // set the stair to add a space
                stair += ' '
            }
        }
        // and console log the stair
        console.log(stair)
    }
}

// recursive
function steps(n, row = 0, stair = '') {
    // base case
    if (n === row) {
        return;
    }
    // add new column if the length of the stair is equal to n
    if (n === stair.length) {
        console.log(stair)
        return steps(n, row + 1)
    }

    if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }
    // recursive
    steps(n, row, stair)
}
steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'