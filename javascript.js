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

function playRound(computerPlay){
    let playerSelection = prompt("Choose your weapon!");
    let computerselection = computerPlay();
    let playerSelectionLower = playerSelection.toLowerCase();
    if(playerSelectionLower===computerselection){
        console.log ("It's a draw!");
        return score;
    } else if(playerSelectionLower=="rock" && computerselection=="scissors"){
        winCount+=1;
        console.log (`You won ${playerSelectionLower} beats ${computerselection}`);
        return score;
    } else if(playerSelectionLower=="rock" && computerselection=="paper"){
        loseCount+=1;
        console.log( `You lost ${computerselection} beats ${playerSelectionLower}`);
        return score;
    } else if(playerSelectionLower=="paper" && computerselection=="rock"){
        winCount+=1;
        console.log(`You won ${playerSelectionLower} beats ${computerselection}`);
        return score;
    } else if(playerSelectionLower=="paper" && computerselection=="scissors"){
        loseCount+=1;
        console.log(`You lost ${computerselection} beats ${playerSelectionLower}`);
        return score;
    } else if(playerSelectionLower=="scissors" && computerselection=="paper"){
        winCount+=1;
        console.log( `You won ${playerSelectionLower} beats ${computerselection}`);
        return score;
    } else if(playerSelectionLower=="scissors" && computerselection=="rock"){
        loseCount+=1;
        console.log(`You lost ${computerselection} beats ${playerSelectionLower}`);
        return score;
    }    
}
console.log(playRound(computerPlay));
function game(){
    for(let i = 0;i<5;i++){
        playRound(computerPlay)
    }
    if(winCount==5){
        console.log("Congratulaions, You won!")

    } else if(loseCount==5) {
        console.log("You lost,GIT GUD")
    }
}