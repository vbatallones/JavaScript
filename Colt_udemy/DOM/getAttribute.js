// Set Attribute 

// old way of setting attribute
document.querySelector('#container').id = 'notContainer'

// the div with an id of container is now named to "notContainer"

document.querySelector('#notContainer').id = 'container'

// notice that we now need to target the id notContainer
// change it back to id container


// Accessing the link attribute

// the file is already prepend unlike
document.querySelector('a').href
"file:///Users/levinbatallones/Desktop/Javascript/JS/JavaScript/Colt_udemy/DOM/www.levin.com"

// if we use the getAttribute method it will give just the link
const aLink = document.querySelector('a')
aLink.getAttribute('href')
// www.levin.com

const image = document.querySelector('img')

function changeImage() {
    const chicken = 'https://img.icons8.com/doodle/96/000000/hatching-chicken.png';
    if(image.src === chicken) {
        image.setAttribute('src', 'https://img.icons8.com/plasticine/100/000000/kawaii-egg.png')
        image.setAttribute('alt', 'chicken')
    }
    else {  
        image.setAttribute('src', 'https://img.icons8.com/doodle/96/000000/hatching-chicken.png')
        image.setAttribute('alt', 'chicken')
    }
}
image.addEventListener('click', changeImage)
