// Functions Scope

let animal = 'Lion'

function myPet(pet) {
    let animal = pet
    console.log(animal) 
}
myPet('Cat') // ---> Cat
console.log(animal) // ----> Lion


const phone = 'Iphone 12'

function myPhone() {
    phone = 'Samsung Galaxy 20'
    console.log(phone) 
}
myPhone() // ---> it will give an error because of a const variable declaration.



