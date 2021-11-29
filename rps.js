

const buttons = document.querySelectorAll(".choiceButton");
buttons.forEach((choiceButton) =>{
    choiceButton.addEventListener('click', () =>{
        alert(choiceButton.textContent);
    });
});

function computerPlay(){
    let roll = Math.random();
    if (roll > .66666){
        return "ROCK";
    }
    else if (roll > .33333){
        return "PAPER";
    }
    else{
        return "SCISSORS";
    }
}

function playRound(playerChoice, computerChoice, playerScore, compScore){
    playerChoice = playerChoice.toUpperCase();
    console.log(" Computer picks: " + computerChoice.toLowerCase());
    if (playerChoice === computerChoice){
        console.log("...No score...");
        return;
    }
    if (playerChoice == "ROCK"){
        if (computerChoice === "SCISSORS"){
            playerScore++;
            console.log("~Player scores!~")
            return 1;
        }
        else if (computerChoice === "PAPER"){
            compScore++;
            console.log("~Computer scores!~")
            return 2;
        }
    }
    else if (playerChoice == "SCISSORS"){
        if (computerChoice === "PAPER"){
            playerScore++;
            console.log("~Player scores!~")
            return 1;
        }
        else if (computerChoice === "ROCK"){
            compScore++;
            console.log("~Computer scores!~")
            return 2;
        }
    }
    else if (playerChoice == "PAPER"){
        if (computerChoice === "ROCK"){
            playerScore++;
            console.log("~Player scores!~")
            return 1;
        }
        else if (computerChoice === "SCISSORS"){
            compScore++;
            console.log("~Computer scores!~")
            return 2;
        }
    }
}

function playerInput(){
    let invalid = false;
    do {
        if (invalid){console.log("INVALID ENTRY, please try again...");}
        playerChoice = window.prompt("ROCK, PAPER, or SCISSORS?");
        invalid = true;
    }
    while(playerChoice.toUpperCase() !== "ROCK" && playerChoice.toUpperCase() !== "SCISSORS" && playerChoice.toUpperCase() !== "PAPER");
    console.log(" Player picks: " + playerChoice.toLowerCase());
    return playerChoice;
}

function game(){

    console.log("BEGIN GAME!!!");
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++){
        console.log("ROUND " + (1 + i) + " BEGINS");
        let computerChoice = computerPlay();
        whoScored = playRound(playerInput(), computerChoice, playerScore, compScore);
        if (whoScored === 1){
            playerScore++;
        }
        else if (whoScored == 2){
            compScore++;
        }
    }

    if (playerScore > compScore){console.log("---PLAYER VICTORY---");}
    else if (compScore > playerScore){console.log("---COMPUTER VICTORY---");}
    else{console.log("---DRAW---");}
    console.log("FINAL SCORE: " + playerScore + " to " + compScore);
}


//game();