 // start with strings, numbers and booleans
let age = 100
let age2 = age
console.log(age, age2)
age = 200
console.log(age, age2)
    // Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    // You might think we can just do something like this:
    const player1 = players
    // however what happens when we update that array?

// This will change the original Array!
    // player1[3] = "Levin"

    // now here is the problem!
    // oh no - we have edited the original array too!

// OUTPUT 

    // player1
    // ["Wes", "Sarah", "Ryan", "Levin"]
    // players
    // ["Wes", "Sarah", "Ryan", "Levin"]

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    // So, how do we fix this? We take a copy instead!

    // one way
    const player2 = players.slice()
        // player2[3] = "Levin"

    // or create a new array and concat the old one in
    const player3 = [].concat(players)
        // player3[3] = "Levin"

    // or use the new ES6 Spread
    const player4 = [...players]
        // player4[3] = "Levin"

    console.log(player4)

    // Array.from() method
    const player5 = Array.from(players)
        // player5[3] = "Levin"

    console.log(player5)
    // now when we update it, the original one isn't changed

// original array
    // players
    // (4) ["Wes", "Sarah", "Ryan", "Poppy"]
// updated of copy array
    // player2 ,player3, player4, player5 
    // (4) ["Wes", "Sarah", "Ryan", "Levin"]


    // The same thing goes for objects, let's say we have a person object
    // with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

    // and think we make a copy:
    // how do we take a copy instead?
const copy1 = Object.assign({}, person, {name: 'Levin', age: '100'})

    // We will hopefully soon see the object ...spread
// const copy2 = {...person}

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const anotherPerson = {
    name: 'Levin',
    age: 100,
    social: {
        github: "vbatallones",
        facebook: "vbatallones"
    }
}

const copy3 = Object.assign({}, anotherPerson)


// another way is the poor man's deep clone
// JSON stringify will make the whole object in a string then the JSON parse will turn it into an object.
const copy4 = JSON.parse(JSON.stringify(anotherPerson))

