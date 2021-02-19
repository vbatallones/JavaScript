// Write a function cakes(), which takes the recipe(object) and the available ingredients(also an object)
//  and returns the maximum number of cakes Pete can bake(integer).
// For simplicity there are no units for the amounts(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
// Ingredients that are not present in the objects, can be considered as 0.



function cakes(recipe, available) {
    let count = [];
    for (let key in recipe) {
        if (!(key in available)) {
            return 0;
        } else if (key in available) {
            let result = (available[key] / recipe[key])
            count.push(Math.floor(result));
        }
    }
    return Math.min(...count);
}


const recipes1 = { flour: 500, sugar: 200, eggs: 1 };
const availables1 = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

console.log(cakes(recipes1, availables1))

const recipes2 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
const availables2 = { sugar: 500, flour: 2000, milk: 2000 };

console.log(cakes(recipes2, availables2))

const recipes3 = {flour: 100, sugar: 100, milk: 100, oil: 100 };
const availables3 = { sugar: 500, flour: 500, milk: 500, oil:500 };

console.log(cakes(recipes3, availables3))
