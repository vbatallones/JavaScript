const playerOne = {
    score: 0,
    display: document.querySelector('.playerOne'),
    button: document.querySelector('.p1Button')
}
const playerTwo = {
    score: 0,
    display: document.querySelector('.playerTwo'),
    button: document.querySelector('.p2Button')
}

const reset = document.querySelector('.reset')
const select = document.querySelector('#upTo')

let winningScore = 3
let gameOver = false

const scoreIt = (player, opponent) => {
    if (!gameOver) {
        player.score += 1
        if (player.score === winningScore) {
            gameOver = true
            player.display.classList.add('winner')
            opponent.display.classList.add('loser')
            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.innerHTML = player.score
    }
}

const addPlayerOne = () => {
    scoreIt(playerOne, playerTwo)
}

const addPlayerTwo = () => {
    scoreIt(playerTwo, playerOne)
}

select.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    resetGameBoard()
})

const resetGameBoard = () => {
    gameOver = false;
    for (let player of [playerOne, playerTwo]) {
        player.score = 0
        player.display.textContent = 0
        player.display.classList.remove('winner', 'loser')
        player.button.disabled = false
    }
}


playerOne.button.addEventListener('click', addPlayerOne)
playerTwo.button.addEventListener('click', addPlayerTwo)
reset.addEventListener('click', resetGameBoard)



