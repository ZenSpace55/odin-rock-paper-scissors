console.log(computerPlay());
let playerScore = 0;
let compScore = 0;

function computerPlay(){
    let roll = Math.random();
    if (roll > .6666){
        return "ROCK";
    }
    else if (roll > .3333){
        return "PAPER";
    }
    else{
        return "SCISSORS";
    }
}

function playRound(playerChoice, computerChoice, i, playerScore, compScore){
    playerChoice = playerChoice.toUpperCase();
    if (playerChoice == computerChoice){
        console.log("DRAW! Next round...");
        return;
    }
    else if (playerChoice == "ROCK"){
    }
    else if (playerChoice == "SCISSORS"){
    }
    else if (playerChoice == "PAPER"){

    }
    else{
    }
}

function playerInput(){
    let playerChoice = "";
    do {
        playerChoice = window.prompt("ROCK, PAPER, or SCISSORS?");
    }
    while(playerChoice.toUpperCase() !== "ROCK" && playerChoice.toUpperCase() !== "SCISSORS" && playerChoice.toUpperCase() !== "PAPER");
    console.log("Player picks: " + playerChoice);
    return playerChoice;
}

function game(){

    console.log("BEGIN GAME!!!");
    for (let i = 0; i < 5; i++){
        console.log("Round: " + (1 + i));
        let computerChoice = computerPlay();
        playRound(playerInput(), computerChoice);
    }
}



game();