let userScore = 0;

let computerScore = 0;

const buttons = document.querySelectorAll('button');

const resultBoard = document.querySelector('#result-board');

const scoreBoard = document.querySelector('#score-board');

const finalBoard = document.querySelector('#final-board');

//Get the computer selection with a random function

function getComputerSelection() {
    const options = ['Rock', 'Paper', 'Scissors'];

    let randomSelection = options[Math.floor(Math.random() * options.length)];

    return randomSelection
}

//Compare selections, report round result and update game score

function playRound(userSelection, computerSelection) {
     let selections = [userSelection, computerSelection];

     if (userSelection === computerSelection) {
        result = 'Game Tie!';
     } else if (selections.includes('Rock') && selections.includes('Paper')) {
        if (userSelection === 'Paper') {
            result = 'You Win! Paper beats Rock.';
            userScore = ++userScore;
        } else{
            result = 'You Lose! Paper beats Rock.';
            computerScore = ++computerScore;
        }
     } else if (selections.includes('Rock') && selections.includes('Scissors')) {
        if (userSelection === 'Rock') {
            result = 'You Win! Rock beats Scissors.';
            userScore = ++userScore;
        } else{
            result = 'You Lose! Rock beats Scissors.';
            computerScore = ++computerScore;
        }
     } else if (selections.includes('Paper') && selections.includes('Scissors')) {
        if (userSelection === 'Scissors') {
            result = 'You Win! Scissors beats Paper.';
            userScore = ++userScore;
        } else{
            result = 'You Lose! Scissors beats Paper.';
            computerScore = ++computerScore;
        }
     } else {
        result = 'Something went terribly wrong.';
     }

     return result;
}

//Announce a winner once one player reaches 5 points and reset score

function game(e) {
    resultBoard.textContent = playRound(e.target.dataset.selection, getComputerSelection());

    scoreBoard.textContent = `Human: ${userScore} x Computer: ${computerScore}`;

    if (userScore === 5 || computerScore === 5) {
        if (userScore > computerScore) {
            finalBoard.textContent = 'Game Over. You Win!';
        } else {
            finalBoard.textContent = 'Game Over. You Lose!';
        }

        let userScore = 0;

        let computerScore = 0;
    }
}

//Play the game when an option is selected
buttons.forEach((button) => {
    button.addEventListener('click', game);
});