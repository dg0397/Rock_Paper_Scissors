const options = ["rock","paper","scissors","rock","paper","scissors","rock","paper","scissors","rock","paper","scissors","rock","paper","scissors","rock","paper","scissors","rock","paper","scissors","rock","paper","scissors","rock","paper","scissors","rock","paper","scissors","rock","paper","scissors",];//Computer Options
const optionSelect = {
    paper:`<i class="far fa-hand-paper"></i>`,
    rock:`<i class="far fa-hand-rock"></i>`,
    scissors:`<i class="far fa-hand-scissors"></i>`,
    question:`<i class="fas fa-question"></i>`
};//user options
const optionsUser = Array.from(document.querySelectorAll('.option'));
const userResult = document.getElementById('user-result');
const computerResult = document.getElementById('computer-result');
const round = document.getElementById('round-play');
const userV = document.getElementById('c-user');
const computerV = document.getElementById('c-computer');
const win = document.getElementById('Winner');
const btnPlay = document.getElementById('btn-play');
const newGame = document.getElementById('play-again');
let roundAct = 0;
let roundUserV=0;
let roundComputerV=0


round.innerText = roundAct;
userV.innerText = roundUserV;
computerV.innerText = roundComputerV;

//generate computer option
const computerPlay = () =>{
    let num = Math.floor(Math.random()*options.length);
    return options[num];
}
//play a round
const roundPlay = (playerSelection,computerSelection)=>{
   
    if((playerSelection==="rock"&& computerSelection==="scissors") || (playerSelection === "paper" && computerSelection==="rock")|| (playerSelection === "scissors" && computerSelection==="paper")){
        return 'user win';
    }else if(playerSelection===computerSelection){
        return 'equal';
    }else{
        return 'computer win'
    }
}
//play a game
const gameOver = (userScore,computerScore) =>{
   let result;
   if(userScore>computerScore){
       result ='User Wins'
   }else if(userScore<computerScore){
       result ='Computer Wins';
   }else{
        result =`It's a tie`;
   }
   playAgain(result);
}
//replay
const playAgain = result=>{
    win.innerText=result;
    newGame.style.display = 'initial';
    
}
//btn effects
function removeTransition(e){
    this.classList.remove('active')
    
}
//restart game
btnPlay.addEventListener('click',function(){
    
    userResult.innerHTML=optionSelect.question;
    computerResult.innerHTML=optionSelect.question;
    roundAct=0;
    roundUserV=0;
    roundComputerV=0;
    round.innerText = 0;
    userV.innerText = 0;
    computerV.innerText = 0;
    win.innerText='';
    newGame.style.display = 'none'
})
//btn  options user
optionsUser.forEach(option=> option.addEventListener('click',function(){
    let userS = (option.attributes[1].value).toLowerCase();
    let computerS = computerPlay();
    let resultRound = roundPlay(userS,computerS);
    
    option.classList.add('active');
    
    
    userResult.innerHTML=optionSelect[userS];
    computerResult.innerHTML=optionSelect[computerS];
    roundAct++;
    round.innerText = roundAct;

    if(roundAct<=5){
        if(resultRound==='user win'){
            roundUserV++;
            userV.innerText = roundUserV;
          }else if(resultRound === 'computer win'){
            roundComputerV++;
            computerV.innerText = roundComputerV;
          }
    }
    if(roundAct===5){
        gameOver(roundUserV,roundComputerV);
    }
    
    
})) 
//remove btn effects
optionsUser.forEach(option => option.addEventListener('transitionend',removeTransition));