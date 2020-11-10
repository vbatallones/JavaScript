/*
HARD

Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

*/


function sevenBoom(arr) {
	
	let regex = RegExp(7, 'g')
	let newArr = arr.join('')

		if (regex.test(newArr)) {
			return 'Boom!'
		} else {
			return 'there is no 7 in the array'
		}
	
}

console.log(sevenBoom([86,4,8,10,06,6])) // there is no 7 in the array
console.log(sevenBoom([76,5,5,4,6,32])) // Boom!
console.log(sevenBoom([3,5,4,9,3,7])) // Boom!
console.log(sevenBoom([3,5,4,91,11,1,3,55,5])) //there is no 7 in the array