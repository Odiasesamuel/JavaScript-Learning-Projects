const celcius = document.querySelector('#tempC');
const calculate = document.querySelector('#calculate');
const Fahrenheit = document.querySelector('#tempF');
// Fahrenheit.disabled = false

calculate.addEventListener('click', convertTemp)

function convertTemp(e){
  // Formulea
  let  val = (1.8 * celcius.value) + 32 ;
  
  Fahrenheit.value = val ;
  
}
