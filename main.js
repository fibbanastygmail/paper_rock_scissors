
let pScore=0;
let cScore=0;
let playerSelection;
let computer;

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
    
    computer= computerPlay()
    playerSelection = prompt("paper, rock, scissors?").toLowerCase()
    console.log("You Selected: " + playerSelection);
    console.log("Computer Selected: " + computer);


     if(playerSelection===computer)
     { // console.log(playerSelection);
       // console.log(computer);
       return  "Tie Game!"
      
     }
     else if((playerSelection==="rock" && computer ==="scissors") || 
             (playerSelection==="scissors" && computer === "paper") ||
             (playerSelection ==="paper" && computer ==="rock")){
                pScore++  
                //console.log(playerSelection);
              //  console.log(computer);  
               // console.log(pScore);
              //  console.log(cScore);      
       return  "You win! " + playerSelection + " beats " + computer 
       

     }
     else {
        cScore++
         
        return "You lose " + computer + " beats " + playerSelection
     }
    
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
        
game();
    





//console.log(playRound(playerSelection,computer))

//console.log(pScore);
//console.log(cScore);
