// Pete likes to bake some cakes. He has some recipes and ingredients.
// Unfortunately he is not good in maths.
// Can you help him to find out, how many cakes he could bake considering his recipes ?

    // Write a function cakes(), which takes the recipe(object) and the available ingredients(also an object)
    //  and returns the maximum number of cakes Pete can bake(integer).
    // For simplicity there are no units for the amounts(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
    // Ingredients that are not present in the objects, can be considered as 0.



    function cakes(recipe, availableRecipe) {
        // create a count variable and set it to a empty array
        let count = [];

        // iterate through the object.
        for (let key in recipe) {

            // if the key in the recipe is NOT in the availableRecipe  return 0.
            if (!(key in availableRecipe)) {
                return 0;

                 // otherwise if the key in the recipe is IN the availableRecipe. 
                // create a result variable and divide the values of the recipe and the availableRecipe.
                // push the result into the count array and use the Math.floor method to round down.
            } else if (key in availableRecipe) {
                let result = (availableRecipe[key] / recipe[key]);
                count.push(Math.floor(result));
            }
        }
        
        // return the minimum count of the array.
        return Math.min(...count);
    }


const recipes1 = { flour: 500, sugar: 200, eggs: 1 };
const availables1 = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

console.log(cakes(recipes1, availables1)) // 2

const recipes2 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
const availables2 = { sugar: 500, flour: 2000, milk: 2000 };

console.log(cakes(recipes2, availables2)) // 0

const recipes3 = { flour: 100, sugar: 100, milk: 100, oil: 100 };
const availables3 = { sugar: 500, flour: 500, milk: 500, oil: 500 };

console.log(cakes(recipes3, availables3)) // 5
