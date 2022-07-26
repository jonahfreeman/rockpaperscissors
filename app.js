// Call upon the different text fields in the html file

const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');

// add a query selector for all with the class of choiceBtn

const choiceBtn = document.querySelectorAll('#choiceBtn');

// variables which will later be filled by function return values

let player;
let computer;
let result;

// Player input is defined here by adding an eventlistener for each button and then assigning the string within the button to the variable player
choiceBtn.forEach(button => button.addEventListener('click', () => {
//variable player equals whatever the content of the clocked button is
    player = button.textContent;
//Invoke the computers turn function, defined below
    computerTurn();
// make the headers display the content of the variables for each player and computer
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
// invoke function to fill the result tab with a result
    resultText.textContent = checkWinner();
}));


//function uses random math from 1-3 and assigns rock paper and scissors to each number, creating the computers choices
function computerTurn() {
    const randNum = Math.floor(Math.random * 3) + 1;
    switch(randNum) {
        case 1: 
            computer = 'Rock';
            break;
        case 2 :
            computer = 'Paper';
            break;
        case 3:
            computer = 'Scissors';
            break;
    }
}


function checkWinner() {
    if (player == computer) {
        return 'Draw!';
    }
    else if (computer == 'Rock') {
        return (player == 'Paper') ? "You win!" : "You lose!";
    }
    else if (computer == 'Paper') {
        return (player == 'Scissors') ? "You win!" : "You lose!";
    }
    else if (computer == 'Scissors') {
        return (player == 'Rock') ? "You win!" : "You lose!";
    }
}

