const giveMeAJoke = require('give-me-a-joke');
const colors = require('colors')
const cowsay = require('cowsay')

giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke.rainbow);
});