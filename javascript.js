

//convert number choices into string
function convertChoice(num) {
    if (num === 1) {
        return "Rock";
    }else if (num === 2) {
        return "Scissors";
    }else
        return "Paper";
}

function getComputerChoice() {
    //make a random number between 0 and 1 and multiply by 3
    //round it down
    randomNum = Math.floor(Math.random() * 3) + 1;
    //add 1 to it to get 1-3
    //if it selects 1-3 it returns the value for rock paper or scissors
    return convertChoice(randomNum);
}

//get the humans choice
function getHumanChoice() {
    humanChoice = parseInt("Rock = 1 \n Scissors = 2 \n Paper = 3 \n What is your choice?:")
    return convertChoice(humanChoice);
}

//Human score and computer score make new variable
let humanScore = 0;
let computerScore = 0;

//make the function for starting the round and giving score to whoever wins
function playRound(humanChoice, ComputerChoice) {
    //lose messages
    if (humanChoice === "Scissors"){
        if (ComputerChoice === "Rock"){
            console.log("You lose! Rock beats Scissors")
            return ++computerScore;
        }if (ComputerChoice === "Paper"){
            console.log("You Win! Scissors beats Paper")
            return ++humanChoice;
        }
    }else if (humanChoice === "Rock"){
        if (ComputerChoice === "Paper"){
            console.log("You lose! Paper beats Rock")
            return ++computerScore;
        }if (ComputerChoice === "Scissors"){
            console.log("You Win! Rock beats Scissors")
            return ++humanChoice;
        }
    }else if (humanChoice === "Paper"){
        if (ComputerChoice === "Scissors"){
            console.log("You lose! Scissors beats Paper")
            return ++computerScore;
        }if (ComputerChoice === "Rock"){
            console.log("You Win! Paper beats Rock")
            return ++humanChoice;
        }
    }else 
        console.log("its a tie!")
}

//make a new function called playRound
function playRound(humanChoice, computerChoice) {
    //make new variable that houses the choices made
    let manChoice = humanChoice();
    let robotChoice= computerChoice();
//make a for loop that goes through 5 rounds
    for (let i = 1; i < 6; i++){
    //each loop recalls the choice functions for different choices each round.
    alert(humanChoice());
    alert(computerChoice());
    }
    //if statement that checks if either score is higher than the other
    let victoryMessage = (humanScore > computerScore) ? "Humanity wins suck it clankers":
    (computerScore > humanScore) ? "FUCK FUCK FUCK FUCK the clankers win you useless fucking human":
    "its a tie?? how the hell";
}