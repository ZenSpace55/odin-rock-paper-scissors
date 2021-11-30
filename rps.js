
const gameText = document.querySelector(".gameText");
//gameText.textContent = "hey hey people";

const buttons = document.querySelectorAll(".choiceButton");
buttons.forEach((choiceButton) =>{
    choiceButton.addEventListener('click', () =>{
        buttonHit(choiceButton.textContent);
        console.log("Player life: " + playerLife + " Enemy Life: " + compLife);
    });
});

const resetBut = document.querySelector(".resetButton");
resetBut.addEventListener('click', () =>{
    resetGame();
});

let gameOver = false;
let playerLife = 5;
let compLife = 10;

function computerPlay(){
    let roll = Math.random();
    if (roll > .66666){
        return "SWORD";
    }
    else if (roll > .33333){
        return "BOW";
    }
    else{
        return "MAGIC";
    }
}

function playRound(playerChoice, computerChoice, playerScore, compScore){
    playerChoice = playerChoice.toUpperCase();
    gameText.textContent += "Smouldering Knight picks " + computerChoice + "...\n";
    console.log(" Computer picks: " + computerChoice.toLowerCase());
    if (playerChoice === computerChoice){
        gameText.textContent += "...you find yourselves evenly matched.";  
        console.log("...No score...");
        return;
    }
    if (playerChoice == "SWORD"){
        if (computerChoice === "MAGIC"){
            //compLife--;
            gameText.textContent += "As the knight prepares a spell, you easily strike him.";
            console.log("~Player scores!~")
            return 1;
        }
        else if (computerChoice === "BOW"){
            //playerLife--;
            gameText.textContent += "The knight fires an arrow, which hits you square in the torso.";
            console.log("~Computer scores!~")
            return 2;
        }
    }
    else if (playerChoice == "MAGIC"){
        if (computerChoice === "BOW"){
            //compLife--;
            gameText.textContent += "The knight reels back, struck by your bolt of arcane magic.";
            console.log("~Player scores!~")
            return 1;
        }
        else if (computerChoice === "SWORD"){
            //playerLife--;
            gameText.textContent += "You feel a sharp sting, the knight has struck you a grave blow.";
            console.log("~Computer scores!~")
            return 2;
        }
    }
    else if (playerChoice == "BOW"){
        if (computerChoice === "SWORD"){
            //compLife--;
            gameText.textContent += "The knight rushes at you!  Luckily, you've already let slip an arrow that finds its mark.";
            console.log("~Player scores!~")
            return 1;
        }
        else if (computerChoice === "MAGIC"){
            //playerLife--;
            gameText.textContent += "As you reach for an arrow, you are knocked back by a powerful magic blast.";
            console.log("~Computer scores!~")
            return 2;
        }
    }
}

function buttonHit(choice){
    gameText.textContent = "";
    if (gameOver){
        return;
    }
    let computerChoice = computerPlay();
    whoScored = playRound(choice, computerChoice, playerLife, compLife);
    if (whoScored === 1){
        compLife--;
    }
    else if (whoScored == 2){
        playerLife--;
    }
    document.getElementById('#playerLife').style.width = (playerLife * 20) +"%";
    document.getElementById('#enemyLife').style.width = (compLife * 10) +"%";
    if (playerLife <= 0){
        gameOver = true;
        document.querySelector(".youDied").classList.add('endTrigger');
    }
    else if (compLife <= 0){
        gameOver = true;
        document.querySelector(".youWin").classList.add('endTrigger');
    }
}

function resetGame(){
    gameText.textContent = "Sword beats magic.  Magic beats bow.  Bow beats sword.";
    document.querySelector(".youDied").classList.remove('endTrigger');
    document.querySelector(".youWin").classList.remove('endTrigger');
    playerLife = 5;
    compLife = 10;
    document.getElementById('#playerLife').style.width = (playerLife * 20) +"%";
    document.getElementById('#enemyLife').style.width = (compLife * 10) +"%";
    gameOver = false;
}