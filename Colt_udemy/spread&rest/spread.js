// spread in function calls

const nums = [1,34,5,6,7,4,3,5,.5,10000]

console.log(Math.max(...nums)) // 10000
console.log(Math.min(...nums)) // 1


// Spread array

const usa = ['Oregon', 'Washington', 'California']
const philippines = ['Manila', 'Laguna', 'Tarlac']

const placesILove = [...usa, ...philippines] 

console.log(placesILove)
// [ 'Oregon', 'Washington', 'California', 'Manila', 'Laguna', 'Tarlac' ]
// joining two arrays using spread. 

console.log(usa)
// [ 'Oregon', 'Washington', 'California' ]
// The original array will not be affected

console.log(philippines)
// [ 'Manila', 'Laguna', 'Tarlac' ]
// The original array will not be affected


// Spread in objects


const user = {
    username: 'iamfranky',
    password: 'frankyfamily',
}

console.log({...user, name: 'Frank'}) 
// { username: 'iamfranky', password: 'frankyfamily', name: 'Frank' }
//copying the user object without affecting the original object.

console.log({user})
//{ user: { username: 'iamfranky', password: 'frankyfamily' } }

const amphibians = {name: 'Cane Toad', class: 'Amphibia'}
const mammals = {isFurry: true, class: 'Mammals', }


console.log({...amphibians, ...mammals})
// if they have a same property the second input will override the property.
// so order matters
// { name: 'Cane Toad', class: 'Mammals', isFurry: true }



// REST params
// using rest params in a function. 
// Different from spread.
// We are not spreading it out.   
// But, we are collecting things in a single parameter.

function winners(a,b,...c) {
    return `First place goes to ${a}, Second place goes to ${b}, and ${c} will receive complementary supplies.`
}

console.log(winners('Vin', 'Cobby', 'Aya', 'Anne', 'Keith'));
//First place goes to Vin, Second place goes to Cobby, and Aya,Anne,Keith will receive complementary supplies.