
    var images  = new Array();
   images.push("rock.png");
   images.push("paper.png");
   images.push("scissors.png");
    

function computerPlay(min,max){
            return Math.floor(Math.random() * (max -min +1)) + min;      
}

function pickimg2(){
    document.randimg.src= images[computerPlay(0, images.length -1)];
}
    


// function playRound(playerSelection, computerSelection){

// if (playerSelection==="rock" && computerSelection==="paper"){
//     return "You Lose! Paper beats Rock!"
// }
// if(playerSelection ==="scissors" && computerSelection==="rock"){
//     return "You Lose! Rock beats Scissors!"
// }
//     if(playerSelection==="paper" && computerSelection==="scissors")
//     {
//         return "You Lose! Scissors beats Paper!"
//     }
//     else {
//         return "Please try again!"
//     }
// }

//console.log(playRound("rock", computerSelection));







// function game(){
//     for (let i = 0; i <5; i++){
//         function playRoundplayerSelection(playerSelection, computerSelection){
//             let sign = prompt("What's your sign?");
//             if (sign.toLowerCase() == "rock"){
//                 alert("You are a rocK!");
//                 sign = window.prompt('Are you feeling lucky?');
//             }

//         }
//     }
// }