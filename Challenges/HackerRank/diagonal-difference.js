/*
    Given a square matrix, calculate the absolute difference between the sums of its diagonals.
    The left-to-right diagonal = 1 + 5 + 9 = 15. 
    The right to left diagonal = 4 + 5 + 11 = 20. 
    Their absolute difference is |15 - 18| = 3.

    1 2 4
    4 5 6
    11 8 9
*/


function diagonalDifference(arr) {
    
    let num = arr.length
    let leftToRight = 0
    let rightToLeft = 0
        for (let i = 0; i < num; i++) {
            leftToRight += arr[i][i]
            rightToLeft += arr[i][num - 1 - i]
        }
    
    console.log(Math.abs(leftToRight - rightToLeft))
}

diagonalDifference([[1,2,4],[4,5,6],[11,8,9]]) // 5