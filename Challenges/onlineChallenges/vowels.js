// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// MY SOLUTION
function vowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j] || str[i] === vowels[j].toUpperCase()) {
                count += 1
            }
        }
    }
    return count
}

// MY REGEX SOLUTION
function vowels(str) {
    const regex = /[aeiou]/gi;
    if (str.match(regex)) {
        return str.match(regex).length
    } else {
        return 0;
    }

}



function vowels(str) {
    let splitted = str.split('')
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    for (let char of splitted) {
        if (vowels.includes(char)) {
            count += 1
        }
    }
    return count
}

vowels('hellooooooo') // => 8