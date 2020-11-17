let maximum = parseInt(prompt('enter a valid number'))

while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number'))
}


const targetNum = Math.floor(Math.random() * maximum) + 1
console.log(targetNum)

let guess = parseInt(prompt('Guess a number'))
let attempts = 1

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') {
        break;
    }
    attempts++
    if (guess > targetNum) {
        guess = prompt('Too high, guess again.')
    } else {
        guess = prompt('Your guess is Too low, try again.')
    }
}

if (guess === 'q') {
    console.log('Okay BYE')
} else {
    console.log(`You got it! it took you ${attempts} to guess it`)
}