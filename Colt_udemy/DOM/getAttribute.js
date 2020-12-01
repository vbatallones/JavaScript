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

