// Destructuring Array with a combination of spread

const prizes = [5000, 3000, 1000, 500,400,300,100]

const [first, second, third, ...everyoneElse] = prizes

console.log(`The first place will get $${first}`)
//The first place will get $5000

console.log(`second will get $${second}`) 
//second will get $3000

console.log(`third is $${third}`)
//third is $1000

console.log(`everyone else will get ${everyoneElse} gift cards`)
//everyone else will get 500,400,300,100 gift cards


// Destructuring object

const user = {
    userName: 'iammatias',
    password: 'hellomatias123!',
    firstName: 'Matias',
    lastName: 'Matteo',
    born: 1970,
    
}

const {firstName, lastName} = user

console.log(`Hi I'm ${firstName} ${lastName}`)
//  Hi I'm Matias Matteo

const {firstName, lastName, born: birthYear, } = user
// assigning a different property  ^^^ but the same value.
console.log(`Hi I'm ${firstName} ${lastName}, I was born in year ${birthYear}`)
// Hi I'm Matias Matteo, I was born in year 1970

const {firstName, lastName, born: birthYear, status = 'single' } = user
// defining a default value that is not in the our user object.

console.log(`Hi I'm ${firstName} ${lastName}`)
// Hi I'm Matias Matteo

console.log(`I was born in year ${birthYear}`) 
// I was born in year 1970

console.log(`I am ${status} ready to mingle`)
// I am single ready to explore



// Destructuring PARAMS


const person  = (({firstName, lastName, age = 50}) => {
    return `Hi my name is ${firstName} ${lastName} and I'm ${age} years old `
})

console.log(person(user))
// Hi my name is Matias Matteo and I'm 50 years old 