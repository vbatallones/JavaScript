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
