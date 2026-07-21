// get the computers choice between 3 numbers

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
    if ((humanChoice === "Scissors" && ComputerChoice === "Rock") ||
     (humanChoice === "Rock" && ComputerChoice === "Paper") ||
     (humanChoice === "Paper" && ComputerChoice === "Scissors")){
        console.log("Computer wins! :/ I expected more of you");
        return ++computerScore;
    }else if ((humanChoice === "Rock" && ComputerChoice === "Scissors") ||
     (humanChoice === "Paper" && ComputerChoice === "Rock") ||
     (humanChoice === "Scissors" && ComputerChoice === "Paper")){
        console.log("Human wins this round");
        return ++humanScore;
    }else
        console.log("its a draw!!");
}

