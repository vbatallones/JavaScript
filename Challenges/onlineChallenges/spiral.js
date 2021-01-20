// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix (n) {
    const result  = [];

    for (let i = 0; i < n; i++) {
        result.push([]);
    }
    
    // counter
    let counter = 1;
    // column
    let startColumn = 0;
    let endColumn = n - 1;
    // row
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        
        for (let i = startColumn; i <= endColumn; i++) {
            result[startRow][i] = counter;
            counter++
        }
        startRow++
        for (let i = startRow; i <= endRow; i++) {
            result[i][endColumn] = counter;
            counter++;
        }
        endColumn--;
        for (let i = endColumn; i >= startColumn; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startColumn] = counter;
            counter++
        }
        startColumn++
    }
    return result
}

console.log(matrix(5))   
/* 
[
    [ 1, 2, 3, 4, 5 ],
    [ 16, 17, 18, 19, 6 ],
    [ 15, 24, 25, 20, 7 ],
    [ 14, 23, 22, 21, 8 ],
    [ 13, 12, 11, 10, 9 ]
]
*/