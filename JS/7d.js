const fahrenheit = convertToFahrenheit(25);
    console.log(fahrenheit);

     function convertToFahrenheit(fValue) {
     const value1 = (fValue * 9 / 5) + 32;
      return value1;
     }
     
     const celsius = convertToCelsius(86);
     console.log(celsius);

      function convertToCelsius(celsius) {
        celsius = (celsius - 32) * 5 / 9;
        
        return celsius;
      }

      function convertTemperature(degrees, unit) {
        console.log((25 * 9 /5) + 32);
      }

      convertTemperature();