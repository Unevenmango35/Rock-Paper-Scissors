function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random()* choices.length);
    return choices[randomIndex];
}

const randomComputerSelection = getComputerChoice();
const PlayerSelection /*player choice will be the prompt from 3 different buttons*/


function playRound(PlayerSelection, randomComputerSelection) {
    /*in what cases return "You win" or "You lose"*/
}

function keepScore(a,b) {
    /* when you win, log a to +1
    when you lose, log b to +1 */
    console.log (a)
    console.log (b)
}

function game(){
    /*end when either a == 5 or b == 5
    log "You have won 5 times! when a == 5
    log"sorry you lose, try again" when b ==5*/
}