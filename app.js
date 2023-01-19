let userScore = 0;

let computerScore = 0;

const buttons = document.querySelectorAll('button');

const resultBoard = document.querySelector('.result-board');

const scoreBoard = document.querySelector('.score-board');

const finalBoard = document.querySelector('.final-board');

//Get the computer selection with a random function

function getComputerSelection() {
    const options = ['Rock', 'Paper', 'Scissors'];

    let randomSelection = options[Math.floor(Math.random() * options.length)];

    return randomSelection
}

//Compare selections, report round result and update game score

function playRound(userSelection, computerSelection) {
     let selections = [userSelection, computerSelection];

     finalBoard.classList.remove('game-over');
     
     finalBoard.textContent = '';

     if (userSelection === computerSelection) {
        result = 'Tie!';
     } else if (selections.includes('Rock') && selections.includes('Paper')) {
        if (userSelection === 'Paper') {
            result = 'Point for human! Paper beats Rock.';
            userScore = ++userScore;
        } else{
            result = 'Point for computer! Paper beats Rock.';
            computerScore = ++computerScore;
        }
     } else if (selections.includes('Rock') && selections.includes('Scissors')) {
        if (userSelection === 'Rock') {
            result = 'Point for human! Rock beats Scissors.';
            userScore = ++userScore;
        } else{
            result = 'Point for computer! Rock beats Scissors.';
            computerScore = ++computerScore;
        }
     } else if (selections.includes('Paper') && selections.includes('Scissors')) {
        if (userSelection === 'Scissors') {
            result = 'Point for human! Scissors beats Paper.';
            userScore = ++userScore;
        } else{
            result = 'Point for computer! Scissors beats Paper.';
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
        finalBoard.classList.add('game-over');

        if (userScore > computerScore) {
            finalBoard.textContent = 'Game Over. Human Wins!';
        } else {
            finalBoard.textContent = 'Game Over. Computer Wins!';
        };

        userScore = 0;

        computerScore = 0;
    };
}

//Play the game when an option is selected
buttons.forEach((button) => {
    button.addEventListener('click', game);
});