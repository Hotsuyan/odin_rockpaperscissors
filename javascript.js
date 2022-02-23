function computerPlay(){
    const random = Math.random()*3;
    if(random<1){
        return"rock";
    } else if(random >2){
        return "scissors";
    } else {
        return "paper"
    }
}

let winCount = 0;
let loseCount = 0;
let score = [winCount,loseCount];
let playerSelection = "";
let container = document.getElementById("container");

const scorePlayer = document.querySelector('.player-score');
const scoreComputer = document.querySelector('.computer-score');

const message = document.querySelector('.results');

scorePlayer.textContent = winCount;
scoreComputer.textContent = loseCount;

const buttons = document.querySelectorAll("button");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function playRock(){
    playRound("rock");
}
function playPaper(){
    playRound("paper");
}
function playScissors(){
    playRound("scissors");
}

rock.addEventListener("click",playRock);
paper.addEventListener("click",playPaper);
scissors.addEventListener("click",playScissors);

function playRound(playerSelectionLower){
    
    let computerselection = computerPlay();
 
    if(playerSelectionLower===computerselection){
        scorePlayer.textContent = winCount;
        scoreComputer.textContent = loseCount;
        container.innerHTML +="It's a draw!<br>";
        
    } else if(playerSelectionLower=="rock" && computerselection=="scissors" ||
                 playerSelectionLower=="paper" && computerselection=="rock" ||
                 playerSelectionLower=="scissors" && computerselection=="paper"){
        winCount+=1;
        scorePlayer.textContent = winCount;
        scoreComputer.textContent = loseCount;
        container.innerHTML +=`You won ${playerSelectionLower} beats ${computerselection}<br>`;
        
    } else if(playerSelectionLower=="rock" && computerselection=="paper" ||
                 playerSelectionLower=="paper" && computerselection=="scissors" ||
                 playerSelectionLower=="scissors" && computerselection=="rock"){
        loseCount+=1;
        scorePlayer.textContent = winCount;
        scoreComputer.textContent = loseCount;
        container.innerHTML +=`You lost ${computerselection} beats ${playerSelectionLower}<br>`;
    }
    if (winCount >= 5 ) {
        message.textContent = 'Game Over. You Win!';

        disableButtons();

      } else if (loseCount >= 5) {
        message.textContent = 'Game Over. You Lose!';

        disableButtons();
      }   
   
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

