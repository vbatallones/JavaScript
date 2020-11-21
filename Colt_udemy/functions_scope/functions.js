// Functions Scope

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


// Block scope

let money = 1000
if (money > 0) {
    const people = 'Levin'
    let msg = 'You have money'
    // inside the block it will work. 
    console.log(people) //--> Levin
    console.log(msg) // --> You have money
}

console.log(money) //----> will give us 1000
console.log(people) // ---> will give an error because it was inside a block 
console.log(msg) // ---> will give an error because it was inside a block 


//  Lexical Scope
// an inner function nested inside of parent function



