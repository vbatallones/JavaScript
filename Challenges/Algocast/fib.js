// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// ITERATIVE SOLUTIONS
const fib = (n) => {
    // fibonacci always starts at 0 and 1.
    const result = [0, 1]

    // iterate starting at index 2 from n, because we want to fill up the result array with the fibonacci sequence.

    for (let i = 2; i <= n; i++) {
        // now we want to get the first index and the last index of the result array.
        const a = result[i - 1]; // this will give us the last index which is 1.
        const b = result[i - 2]; // minus 2 because we are starting at index to so to get the first index we minus 2 and it will give us the 0.

        // now we want to add them and push it into the result array.
        // and this will do the fibonacci sequence.
        // the first iterate will add the 0, 1 it will produce 1 then 1 and 1 
        // it's going to be 2.. 2 + 1... 3... 2 + 3... 5... 5 + 3 ... 8 so on.
        result.push(a + b);
    }
    // return the result with the index of n
    return result[n]
}

console.log(fib(4)) // --> 3

// RECURSIVE WAY

function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(4)) // --> 3


// MEMOIZATION

function memoize(fn) {
    // we store the data in the cache object variable
    const cache = {};
    // if we want to use the memoize function and assume that will be having a multiple arguments. we use "...args".
    return function (...args) {
        // check if something already exist, if so return the result.
        if (cache[args]) {
            return cache[args];
        }
        // if not we want to add it into the cache result using the apply method.

        // from MDN.
        // The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
        const result = fn.apply(this, args);
        // store the result that we just created
        cache[args] = result;

        return result;
    };
}

function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

console.log(fib(4))

module.exports = fib
