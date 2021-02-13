const pigIt = (str) => {
    //Code here
    let result = []
    let word = 'ay'
    let exclude = { '!': 1, '?': 1 };
    for (let char of str.split(' ')) {
        let newChar = char.slice(1)
        if (!exclude[char]) {
            result.push(`${newChar}${char[0]}${word}`)
        } else if (exclude[char]) {
            result.push(`${char}`)
        }
    }
    return result.join(' ')
}


console.log(pigIt('Pig latin is cool')) //'igPay atinlay siay oolcay'
console.log(pigIt('This is my string !')) //'hisTay siay ymay tringsay'