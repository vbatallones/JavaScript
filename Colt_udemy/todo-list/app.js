let options = prompt("What would you like to do?")



const todos = []

while (options !== 'quit') {
    if (options === 'add') {
        const newToDo = prompt('Add your todo')
        todos.push(newToDo)
        console.log(`${newToDo}  added to the list`)
    
    } else if (options === 'show') {

        console.log('-----------------')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}. ${todos[i]}`)
        }
        console.log('-----------------')

    } else if (options === 'delete') {
        const index = parseInt(prompt('What number are we going to delete?'))
            if (!Number.isNaN(index)) {
                todos.splice(index, 1)
                console.log(`Item have been removed to the list.`)
            } else {
                console.log('Please enter the number of the list.')
            }
    }
        options = prompt("what todo's are we going?")
}

console.log('You quit the APP')

