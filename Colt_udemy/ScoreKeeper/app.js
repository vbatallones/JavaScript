const p1Score = document.querySelector('.playerOne')
const p2Score = document.querySelector('.playerTwo')
const p1button = document.querySelector('.p1Button')
const p2button = document.querySelector('.p2Button')
const reset = document.querySelector('.reset')
const select = document.querySelector('#upTo')

let playerScore1 = 0
let playerScore2 = 0
let winningScore = 3
let gameOver = false

const addPlayerOne = () => {
    if (!gameOver) {
        playerScore1 += 1
        if (playerScore1 === winningScore) {
            gameOver = true
            p1Score.classList.add('winner')
            p2Score.classList.add('loser')
            p1button.disabled = true
            p2button.disabled = true
        }
        p1Score.innerHTML = playerScore1
    }
}

const addPlayerTwo = () => {
    if (!gameOver) {
        playerScore2 += 1
        if (playerScore2 === winningScore) {
            gameOver = true
            p2Score.classList.add('winner')
            p1Score.classList.add('loser')
            p1button.disabled = true
            p2button.disabled = true
        }
        p2Score.innerHTML = playerScore2
    }
}

select.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    resetGameBoard()
})

const resetGameBoard = () => {
    gameOver = false;
    playerScore1 = 0;
    playerScore2 = 0;
    p1Score.innerHTML = 0;
    p2Score.innerHTML = 0;
    p1Score.classList.remove('winner', 'loser')
    p2Score.classList.remove('winner', 'loser')
    p1button.disabled = false
    p2button.disabled = false
}


p1button.addEventListener('click', addPlayerOne)
p2button.addEventListener('click', addPlayerTwo)
reset.addEventListener('click', resetGameBoard)



