const button = document.querySelector('button')
const h1 = document.querySelector('h1')

function changeColor() {
    document.body.style.backgroundColor = randomColor()
    h1.innerText = `${randomColor()}`
}

function randomColor() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
        return `rgb(${r}, ${g}, ${b})`

}

button.addEventListener('click', changeColor)
