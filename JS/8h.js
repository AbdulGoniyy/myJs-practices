console.log(JSON.parse(localStorage.getItem('score')));

   if ('score' === null) {
    calculation = {score: ''}};

     
      let calculation = '';

      function updateCalculation(number) {
       calculation += number;
        console.log(calculation);
      }