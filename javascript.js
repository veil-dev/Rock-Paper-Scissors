

//convert number choices into string
function convertChoice(num) {
    if (num === 1) {
        return "Rock";
    }else if (num === 2) {
        return "Scissors";
    }else (num === 3)
        return "Paper";
}

function getComputerChoice() {
    //make a random number between 0 and 1 and multiply by 3
    //round it down
    let randomNum = Math.floor(Math.random() * 3) + 1;
    //add 1 to it to get 1-3
    //if it selects 1-3 it returns the value for rock paper or scissors
    return convertChoice(randomNum);
}

//get the humans choice
function getHumanChoice() {
    let humanChoice = parseInt(prompt("Rock = 1 \n Scissors = 2 \n Paper = 3 \n What is your choice?:"));
    
    
    while(humanChoice !== humanChoice || humanChoice > 3 || humanChoice < 1)  {
        alert("not in the range sorry")
        humanChoice = parseInt(prompt("Rock = 1 \n Scissors = 2 \n Paper = 3 \n What is your choice?:"));
    }
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
            alert("You lose! Rock beats Scissors")
            ++computerScore;
        }if (ComputerChoice === "Paper"){
            alert("You Win! Scissors beats Paper")
            ++humanScore;
        }
    }else if (humanChoice === "Rock"){
        if (ComputerChoice === "Paper"){
            alert("You lose! Paper beats Rock")
            ++computerScore;
        }if (ComputerChoice === "Scissors"){
            alert("You Win! Rock beats Scissors")
            ++humanScore;
        }
    }else if (humanChoice === "Paper"){
        if (ComputerChoice === "Scissors"){
            alert("You lose! Scissors beats Paper")
            ++computerScore;
        }if (ComputerChoice === "Rock"){
            alert("You Win! Paper beats Rock")
            ++humanScore;
        }
    }else 
        alert("its a tie!");
}

//make a new function called playRound
function playGame() {
    //make new variable that houses the choices made
    let manChoice;
    let robotChoice;
//make a for loop that goes through 5 rounds
    for (let i = 1; i < 6; i++){
    //each loop recalls the choice functions for different choices each round.
    manChoice = getHumanChoice();
    robotChoice = getComputerChoice();
    //call the function playRound to play a round first
    playRound(manChoice, robotChoice);
    }
    //if statement that checks if either score is higher than the other
    let victoryMessage = (humanScore > computerScore) ? "Humanity wins suck it clankers":
    (computerScore > humanScore) ? "FUCK FUCK FUCK FUCK the clankers win you useless fucking human":
    "its a tie?? how the hell";
    alert(victoryMessage);
}

playGame()
