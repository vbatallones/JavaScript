// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters 
// then it should replace the missing second character of the final pair with an underscore ('_').



function solution(str) {

    const result = [];

    for (let i = 0; i < str.length; i++) {
        str[i + 1] === undefined ? result.push(str[i].concat('_')) : result.push(str[i].concat(str[i+=1]))
    }
    return result
}


console.log(solution('abc')) // should return ['ab', 'c_']
console.log(solution('abcdef')) // should return ['ab', 'cd', 'ef']
