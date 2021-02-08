
// multiple colors

// const colors = [
//     "#2196f3",
//     "#e91e63",
//     "#ffeb3b",
//     "#74ff1d"
// ]


const section = document.querySelector('section');
const toggleButt = document.querySelector('.toggle'); 
const bright = document.querySelector('.bright');
const cloud1 = document.querySelector('.cloud1')
const cloud2 = document.querySelector('.cloud2')
const cloud3 = document.querySelector('.cloud3')


const createStar = () => {
    let star = document.createElement('span');

    let size = Math.random() * 10;

    star.style.width = 10 * size + "px";
    star.style.height = 10 * size + "px";
    // added the shadow effect on the parent element
    // section.style.filter = 'drop-shadow(3rem 3rem 3rem yellow)'
    // Star using CSS clip path
    star.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
    star.style.top = Math.random() * innerHeight + 'px';
    star.style.left = Math.random() * innerWidth + 'px';
    
    // incase I want to use multiple colors
    // const bg = colors[Math.floor(Math.random() * colors.length)]

    star.style.background = "#ffeb3b"
    section.appendChild(star)

    setTimeout(() => {
        star.remove()
    }, 2000);
}

const toggleMe = () => {
    if (section.style.display === "none") {
        section.style.display = "block";
        document.body.classList.remove("bright")
        cloud1.style.position = "static"
        cloud2.style.position = "static"
        cloud3.style.position = "static"
    } else {
        document.body.classList.toggle("bright")
        cloud1.style.position = "absolute"
        cloud2.style.position = "absolute"
        cloud3.style.position = "absolute"
        section.style.display = "none";
    }
    
}


setInterval(createStar, 150);

toggleButt.addEventListener('change', toggleMe)