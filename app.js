/*Problem: Create a logic to play the game "Rock, Paper, Scissors" between human and computer. 
In this game players select one option among Rock, Paper and Scissors. Rock beats Scissors; Paper beats Rock and Scissors beats Paper. Equal selections tie.
The human selection will be input, while the computer selection will be random.
We need to compare selections to determine who gets the round point. In case of tie, nobody gets the point.
It will be a 5-round so the first to score 5 points is the winner.*/

//Get the computer selection with a random function

function getComputerSelection() {
    const options = ['Rock', 'Paper', 'Scissors'];

    let randomSelection = options[Math.floor(Math.random() * options.length)];

    return randomSelection
}

let computerSelection = getComputerSelection();

//Get the user selection with an input (prompt) and process it in a case-insensitive way

function getUserSelection() {
    let userInput = prompt('Rock, paper or scissors... What\'s your choice?');

    let userInputProcessed = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();

    return userInputProcessed;
}

let userSelection = getUserSelection();

//Compare selections, report round result and computer game score

let userScore = 0;

let computerScore = 0;

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

let resultDeclaration = playRound(userSelection, computerSelection);

console.log(resultDeclaration);

console.log(`Human: ${userScore} x Computer: ${computerScore}`);

//Create a loop to keep the game going until one player scores 5 points

//Report game result once the 5-point score is reached