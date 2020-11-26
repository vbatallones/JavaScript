/* You get a list of non-zero integers A, its length is always even and always greater than one. 
Your task is to find such non-zero integers W that the weighted sum

A0 * W0 + A1⋅W1 +..+ An * Wn

is equal to 0. */

function weight(list) {
    let result = []

    for (let i = 0; i < list.length; i++) {
        result.push(i % 2 === 0 ? list[i+1] : -list[i-1])
    }
    return result
}

weights([1, 2, 3, 4, 5, 6]) // => [ 2, -1, 4, -3, 6, -5 ]
// 1 *2 + 2 * -1 + 3 *4 +4 * -3 + 5 * 6 + 6 * -5 = 0
weights([-1, 1]) // => [ 1, 1 ]
// -1 * 1 + 1 * 1 = 0