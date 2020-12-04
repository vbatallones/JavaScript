const sprites = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const container = document.querySelector('#container')
const pokeImg = document.querySelector('img')
let num = 1



const leftAndRight = (e) => {
    
    const pokemon = document.createElement('div')
    pokemon.classList.add('pokemon')
    switch (e.code) {
        case 'ArrowRight':
            pokeImg.src = `${sprites}${num+=1}.png`
            break;
        case 'ArrowLeft':
            if (num <= 1) {
                return pokeImg.src = `${sprites}${num}.png`
            } else {
                pokeImg.src = `${sprites}${num-=1}.png`
            }
            break;
    }
    pokemon.appendChild(pokeImg)
    container.appendChild(pokemon)
    
}

window.addEventListener('keydown', leftAndRight)
