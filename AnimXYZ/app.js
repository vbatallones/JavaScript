const xyz = document.querySelectorAll('.xyz-in')
const button = document.querySelector('button')
let elemCount = xyz.length;


const inAndOut = () => {
    for (let i = 0; i < elemCount; i++) {
        xyz[i].classList.toggle("xyz-out");
    }
}





button.addEventListener('click', inAndOut)



