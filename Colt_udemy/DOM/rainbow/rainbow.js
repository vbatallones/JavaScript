const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const allSpan = document.querySelectorAll('span')

for (let i = 0; i < colors.length; i++) {
    allSpan[i].style.color = `${colors[i]}`
}