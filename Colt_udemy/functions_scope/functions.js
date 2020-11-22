// Functions Scope
// The location where a variable is defined dictates where we have access to that variable

// let animal = 'Lion'

// function myPet(pet) {
//     let animal = pet
//     console.log(animal) 
// }
// myPet('Cat') // ---> Cat
// console.log(animal) // ----> Lion


// const phone = 'Iphone 12'

// function myPhone() {
//     phone = 'Samsung Galaxy 20'
//     console.log(phone) 
// }
// myPhone() // ---> it will give an error because of a const variable declaration.


// // Block scope

// let money = 1000
// if (money > 0) {
//     const people = 'Levin'
//     let msg = 'You have money'
//     // inside the block it will work. 
//     console.log(people) //--> Levin
//     console.log(msg) // --> You have money
// }

// console.log(money) //----> will give us 1000
// console.log(people) // ---> will give an error because it was inside a block 
// console.log(msg) // ---> will give an error because it was inside a block 


// //  Lexical Scope
// // an inner function nested inside of parent function

// function myCars() {

//     const cars = ['Lambo', 'Civic', 'Toyota', 'Subaru' ]

//     function faveCars() {
//         for(let car of cars) {
//             console.log(`I love my ${car}`)
//         }
//     }
//     faveCars() //--> it has to be called inside the parent in order to run that function.
// }

// myCars() // ---> // I love my Lambo
//                 // I love my Civic
//                 // I love my Toyota
//                 // I love my Subaru


// High Order Function
    // Function that operates with other function.

// accept a function as a argument.
// Returning function.

function inBetween(min, max) {
    return function(num) {
        return num >= min && num <= max
    }
}

inBetween(10, 20) // --> it will return the function that is holding the num. it will not execute it.

const between = inBetween(10,20) //--> variable declaration and we are going to use that to call and execute the returning function.

console.log(between) //--> The variable between is holding the returning inBetween function.

console.log(between(11)) // -->The between variable with a argument passed in is the "num" argument that we are calling in the returning function of "inBetween". 

//It will execute the returning function.

//And the output of that will be true because 11 is inBetween of 10 and 20.



