/* Given two arrays of strings a1 and a2 
return a sorted array in lexicographical order 
of the strings of a1 which are substrings of strings of a2 */

const inArray = (arr1, arr2) => arr1.filter(val => arr2.join(' ').includes(val)).sort()




a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2)) // [ 'live', 'strong' ]