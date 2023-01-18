/*Problem: Create a logic to play the game "Rock, Paper, Scissors" between human and computer. 
In this game players select one option among Rock, Paper and Scissors. Rock beats Scissors; Paper beats Rock and Scissors beats Paper. Equal selections tie.
The human selection will be input, while the computer selection will be random.
We need to compare selections to determine who gets the round point. In case of tie, nobody gets the point.
It will be a 5-round so the player with higher score after 5 rounds is the game winner.*/

let userScore = 0;

let computerScore = 0;

//game();

//Get the computer selection with a random function

function getComputerSelection() {
    const options = ['Rock', 'Paper', 'Scissors'];

    let randomSelection = options[Math.floor(Math.random() * options.length)];

    return randomSelection
}

//Get the user selection with an input (prompt) and process it in a case-insensitive way

function getUserSelection() {
    let userInput = prompt('Rock, paper or scissors... What\'s your choice?');

    let userInputProcessed = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();

    return userInputProcessed;
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

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.dataset.selection, getComputerSelection()));
    });
});

//Create a loop to play 5 rounds

/*function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerSelection();

        let userSelection = getUserSelection();

        let resultDeclaration = playRound(userSelection, computerSelection);

        console.log(resultDeclaration);

        console.log(`Human: ${userScore} x Computer: ${computerScore}`);
    }
}

//Report game result after 5 rounds

console.log('Game Over');

if (userScore > computerScore) {
    console.log(`You Win! Human: ${userScore} x Computer: ${computerScore}`);
} else if (userScore < computerScore) {
    console.log(`You Lose! Human: ${userScore} x Computer: ${computerScore}`);
} else {
    console.log(`Tie Game! Human: ${userScore} x Computer: ${computerScore}`);
}*/