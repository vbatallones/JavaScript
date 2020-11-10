/*
HARD

Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.



*/


const towerHanoi = discs => (2**discs) - 1;


console.log(towerHanoi(3)) // ➞ 7

console.log(towerHanoi(5))// ➞ 31

console.log(towerHanoi(0)) // ➞ 0