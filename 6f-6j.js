let rNumber = Math.random();
   let guess = ('heads' || 'tails');
   let result = '';

    rNumber < 0.5 ? result = 'heads' : result = 'tails';
    guess === result ? console.log('You win!') : console.log('You lose!');