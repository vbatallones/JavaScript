const div = document.querySelector('div')
const buttonColor = document.querySelector('#changeColor')
const buttonDiv = document.querySelector('.showDiv')

div.addEventListener('click', function () {
    div.classList.toggle('hide')
})

buttonDiv.addEventListener('click', function () {
    div.classList.remove('hide')
    console.log('click')
})

buttonColor.addEventListener('click', function (e) {
    div.style.color = randomColor()
    e.stopPropagation()
})


function randomColor() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
        return `rgb(${r}, ${g}, ${b})`

}