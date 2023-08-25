const consoleMessages = document.getElementById("console-messages");
let playerScore = 0;
let computerScore =0;

function Game (playerchoice, randomComputerSelection) {
    clearConsole();
    logToConsole(playerchoice + " vs " + randomComputerSelection);
    playRound(playerchoice, randomComputerSelection);
    keepScore();
}

function clearConsole() {
    while(consoleMessages.firstChild) {
        consoleMessages.removeChild(consoleMessages.firstChild);
    }
}

function logToConsole(message) {
    const logElement = document.createElement("h3");
    logElement.textContent = message;
    consoleMessages.appendChild(logElement);
}


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", function() {
    const randomComputerSelection = getComputerChoice();
    Game("Rock", randomComputerSelection);
});

paperButton.addEventListener("click", function() {
    const randomComputerSelection = getComputerChoice();
    Game("Paper", randomComputerSelection);
});

scissorsButton.addEventListener("click", function() {
    const randomComputerSelection = getComputerChoice();
    Game("Scissors", randomComputerSelection);
});

function playRound(playerChoice, computerChoice) {
    /*in what cases return "You win" or "You lose"*/
    if (playerChoice === computerChoice) {
        logToConsole("It's a tie!");
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Scissors" && computerChoice === "Paper") ||
        (playerChoice === "Paper" && computerChoice === "Rock")
    ) {
        logToConsole("You win!");
        playerScore++;
    } else {
        logToConsole("You lose!");
        computerScore++;
    }
}


function keepScore() {
    logToConsole("Player " + playerScore + " vs " + computerScore + " Computer");
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            logToConsole("Player wins! 💪 It's your lucky day. Go buy some lottos!");
        } else {
            logToConsole("Computer wins! 😅 It's okay. Better luck next time!");
        }
        // Reset the scores to 0
        playerScore = 0;
        computerScore = 0;
    }
}