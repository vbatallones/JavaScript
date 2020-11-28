// Destructuring Array with a combination of spread

const prizes = [5000, 3000, 1000, 500,400,300,100]

const [first, second, third, ...everyoneElse] = prizes

console.log(`The first place will get $${first}`)
console.log(`second will get $${second}`) 
console.log(`third is $${third}`)
console.log(`everyone else will get ${everyoneElse} gift cards`)


