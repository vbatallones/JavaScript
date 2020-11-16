// const f = n => {
//     if (n <= 1) {
//         return 1
//     } else {
//         return n * f(n - 1)
//     }
// }
// f(4)
// output 24

const multiplyFunctions = (x) => {
    x *= 2;
        return function(y) {
            y *= x;
            return function(z) {
                return z * y
            }
        }
}

multiplyFunctions(3)(4)(5)
// output 120


function makeAdder(x) {
    return function (n) {
        return x + n
    }
}

let add5 = makeAdder(5);
let add8 = makeAdder(8);
let add20 = makeAdder(20);
console.log(add5(10))
console.log(add8(6))
console.log(add20(6))
output(add5(10) === 15)
output(add8(6) === 14)
output(add20(6) === 16)


// function foo () {

//     function bar () {
//         setTimeout(
//         () => console.log('Curly'),1000);
//     }
//     console.log('Larry')
//     return bar;
// }

// let x = foo();
// x()
// console.log('Moe')
// output "Larry" "Moe" "Curly"


