// Set Attribute 

// old way of setting attribute
document.querySelector('#container').id = 'notContainer'

// the div with an id of container is now named to "notContainer"

document.querySelector('#notContainer').id = 'container'

// notice that we now need to target the id notContainer
// change it back to id container

