
let pScore=0;
let cScore=0;
let round = 0;
let playerSelection;
let computer;

let playerDiv = document.querySelector(".playerSelect");
let computerDiv = document.querySelector(".computerSelect");
let roundDiv = document.querySelector(".round");
let playerScoreDiv = document.querySelector(".playerScore");
let computerScoreDiv = document.querySelector(".computerScore");
let resultDiv = document.querySelector(".result");        
let buttons = document.querySelectorAll('button');

buttons.forEach((button) =>{

button.addEventListener('click', () =>{
    //console.log(button.id)
    playerSelection=button.id;
    
    console.log(playRound());
  });
});

function computerPlay() {
     selection = Math.random();

     if(selection <0.34){
         computerSelection = "rock"
     }
     else if(selection >=0.34 && selection <0.67){
         computerSelection =  "paper"
     }
     else{
         computerSelection = "scissors"
     }
     return computerSelection
};

function playRound(){
    let result = "";
    
    
    computer= computerPlay()
    round++;

    
    
    //playerSelection = prompt("paper, rock, scissors?").toLowerCase()
    //console.log("You Selected: " + playerSelection);
    //console.log("Computer Selected: " + computer);


     if(playerSelection===computer)
     { // console.log(playerSelection);
       // console.log(computer);
       result =  "Tie Game!"
      
     }
     else if((playerSelection==="rock" && computer ==="scissors") || 
             (playerSelection==="scissors" && computer === "paper") ||
             (playerSelection ==="paper" && computer ==="rock")){
                pScore++  
                //console.log(playerSelection);
              //  console.log(computer);  
               // console.log(pScore);
              //  console.log(cScore);      
       result =  "You win! " + playerSelection + " beats " + computer 
       

     }
     else {
        cScore++
        result = "You lose! " + computer + " beats " + playerSelection
        
     }
     resultDiv.textContent = result;
    
        
        playerDiv.textContent = "Player chooses " + playerSelection;
        playerScoreDiv.textContent = "Player score " + pScore;

        computerScoreDiv.textContent = "Computer score " + cScore;
        computerDiv.textContent = "Computer chooses " + computer;
        roundDiv.textContent = "Round " + round;
}

function game()
{
    
do{
    
    console.log(playRound())
    console.log("Your Score: " + pScore);
    console.log("Computer Score: " + cScore); 
}
    while (pScore < 5 && cScore < 5);
    if(pScore===5){
        console.log("You Win!!!")
    }
    else if (cScore===5){
        console.log("You lost")
    }
}
    

