function pigIt(str) {
    //Code here
    let patt = /\b\w/g;
    let result = []

    for (let char of str.split(' ')) {
        let newChar = char.slice(1)
        result.push(`${newChar}${char.match(patt).concat('ay').join('')}`)
    }
    return result.join(' ')
}


console.log(pigIt('Pig latin is cool')) //'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')) //'hisTay siay ymay tringsay'