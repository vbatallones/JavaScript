// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in
//  a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. 
// Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// check the minimum and maximum number and round it off to the closest valid value.
const checkRange = num => Math.min(255, Math.max(num, 0))

const convertMe = (r,g,b) => [r,g,b].slice(0,3)
    .map(num => checkRange(num)
    // toString(16) returns a hexadecimal value of the given number
        .toString(16)
    // uppercase the given input if it is a alphabet
        .toUpperCase()
    // pads the current string with another string
        .padStart(2, '0'))
    // join input into a one whole string
        .join('')


console.log(convertMe(255,255,255)) //white
console.log(convertMe(0,-20,0)) // black
console.log(convertMe(200,105,-55)) // orange