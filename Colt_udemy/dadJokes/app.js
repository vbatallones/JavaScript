const button = document.querySelector('button')
const jokes = document.querySelector('#jokes')

const addNewJoke = async () => {
    const dadJokes = await getDadJokes()
    const li = document.createElement('li')
    li.append(dadJokes)
    jokes.append(li)
}

const getDadJokes = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            } 
        }
        const req = await axios.get('https://icanhazdadjoke.com/', config)
        return req.data.joke
        
    } catch(e) {
        return "NO JOKES AVAILABLE"
    }
}

button.addEventListener('click', addNewJoke)