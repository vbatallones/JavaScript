const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const h1 = document.querySelector('h1')
const allSpan = document.querySelectorAll('span')

const clickSpan = () => {
    // give colors to each of the span
    for (let i = 0; i < colors.length; i++) {
            allSpan[i].style.color = `${colors[i]}`;
        }
        // prepend, inserting text inside of H1 and it will be in the front
        h1.prepend('RAINBOW')

        // append, after the H1 
        h1.append('RAINBOW')

        // creating new element
        const newHead1 = document.createElement('h2')
        
        // I use append to insert text, but I can you innerText also and innerHTML
        newHead1.append('RAINBOW')
        // adding a class to access the css style I did
        newHead1.classList.add('plain')
        // then I insert it after end of the H1
        h1.insertAdjacentElement('afterend', newHead1)

        // the only difference here is that I insert the element before the beginning of H1
        const newHead2 = document.createElement('h2')
        newHead2.append('RAINBOW')
        newHead2.classList.add('plain2')
        h1.insertAdjacentElement('beforebegin', newHead2)

        // removing the event listener after you clicked the H1
        h1.removeEventListener('click', clickSpan)
}

h1.addEventListener('click', clickSpan)
