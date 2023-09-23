const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER'
const SCISSOR = 'SCISSOR'
const DEFAULT_CHOICE = 'ROCK'
const RESULT_DRAW = "DRAW_MATCH"
const RESULT_PALYER_WIN = " PLAYER WINS"
const RESULT_COMPUTER_WINS = "COMPUTER_WINS"

const userChioce = function getUserSelection() {
    let select = prompt("Rock,paper & scissor", "").toUpperCase();
    if (select === ROCK || select === PAPER || select === SCISSOR) {
        return select;
    } else {
        alert("Invalid user input")
        return DEFAULT_CHOICE;
    }
}

const comChoice = function getComputerChoice() {
    const choice = Math.random();
    if (choice < 0.33) {
        return ROCK;
    } else if (choice < 0.66) {
        return PAPER;
    } else {
        return SCISSOR;
    }
}


const winner = (cChoice, pChoice) =>
    pChoice === cChoice ? RESULT_DRAW : (pChoice === ROCK && cChoice === SCISSOR ||
        pChoice === PAPER && cChoice === ROCK ||
        pChoice === SCISSOR && cChoice === PAPER) ? RESULT_PALYER_WIN : RESULT_COMPUTER_WINS;


// const winner = function getWinner(cChoice, pChoice)
// {

//     if(pChoice === cChoice)
//     {
//         console.log("draw match")
//     }else if(pChoice === ROCK && cChoice === SCISSOR || 
//         pChoice === PAPER && cChoice === ROCK || 
//         pChoice === SCISSOR && cChoice === PAPER)
//         {
//             console.log("player wins")
//         }else {
//             console.log("computer wins")
//         }
// }
startGameBtn.addEventListener('click', function () {
    const playerChoice = userChioce()
    console.log("player chocie = " + playerChoice)
    const computerChoice = comChoice()
    console.log("computer choice = " + computerChoice)
    const winnerName = winner(computerChoice, playerChoice);
    console.log(winnerName);



})
