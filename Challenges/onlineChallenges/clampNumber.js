// Nearest num within the inclusive range specified by the boundary values a and b.
// If num falls within the range, return num. Otherwise, return the nearest number in the range.

const nearestNum = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

console.log(nearestNum(4, 3, 5)); // 4
console.log(nearestNum(8, 6, 9)) // 8