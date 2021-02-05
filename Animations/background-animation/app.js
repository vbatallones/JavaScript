
// multiple colors

// const colors = [
//     "#2196f3",
//     "#e91e63",
//     "#ffeb3b",
//     "#74ff1d"
// ]

const createStar = () => {
    const section = document.querySelector('section');
    const star = document.createElement('span');

    let size = Math.random() * 10;

    star.style.width = 10 * size + "px";
    star.style.height = 10 * size + "px";
    // added the shadow effect on the parent element
    section.style.filter = 'drop-shadow(3rem 3rem 3rem yellow)'
    // Star using CSS clip path
    star.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
    star.style.top = Math.random() * innerHeight + 'px';
    star.style.left = Math.random() * innerWidth + 'px';
    
    // incase I want to use multiple colors
    // const bg = colors[Math.floor(Math.random() * colors.length)]

    star.style.background = "#ffeb3b"
    section.appendChild(star)

    setTimeout(() => {
        square.remove()
    }, 5000);
}


setInterval(createStar, 150);