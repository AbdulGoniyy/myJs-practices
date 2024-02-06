console.log(JSON.parse(localStorage.getItem('result')));

let score = {
   wins: 0,
   losses: 0
 };
 

 
 function playGame(playerMove) {
   const computerMove = pickComputerMove();

   if (playerMove === 'heads') {
       if (computerMove === 'heads') {
     result = 'You win.';
   } else if (computerMove === 'tails') {
     result = 'You lose.';
   }

   } else if (playerMove === 'tails') {
   if (computerMove === 'heads') {
   result = 'You lose.';
 } else if (computerMove === 'tails') {
   result = 'You win.';
 } 

   }

   if (result=== 'You win.') {
     score.wins += 1;
   } else if (result === 'You lose.') {
     score.losses += 1;
   }

 };

 console.log(localStorage.setItem('result', JSON.stringify(score)));
 
     alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}.`);

   



let result = '';
function pickComputerMove() {
const randomNumber = Math.random();

let computerMove =  '';



if (randomNumber >= 0  && randomNumber <= 0.5 ) {
 computerMove = 'heads'; 
} else if (randomNumber > 0.5) {
 computerMove = 'tails';
} 

return computerMove;
}


