let finalResult = '';
let result = ''; 

function playGame(guess) {

  let rNumber = Math.random();

rNumber < 0.5 ? computerMove = 'heads' : computerMove = 'tails';

score = {
  wins: 0,
  loses: 0
};   

if (guess === 'heads' && result === 'heads') {
  score.wins += 1
} else if (guess === 'tails' && result === 'tails') 
  score.loses += 1;

  if (result === 'You win') {
  finalResult = 'You win!`'
} else if (result === 'You lose!')

console.log(`You picked ${guess}, Computer picked ${result}, You `)

};

