const sprites = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const container = document.querySelector('#container')

for (let i = 1; i <= 100; i++) {
    const pokemon = document.createElement('div')
    pokemon.classList.add('pokemon')
    const spanText = document.createElement('span')
    spanText.innerText = `Pokemon #${i}`

    const newImg = document.createElement('img')
    newImg.src = `${sprites}${i}.png`
    newImg.alt = 'pokemons'
    pokemon.appendChild(newImg)
    pokemon.appendChild(spanText)
    container.appendChild(pokemon)
}