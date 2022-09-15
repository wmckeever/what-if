const prompt = require('prompt-sync')({sigint: true});

let venus = 1;
let mars = 2;
let jupiter = 3;
let saturn = 4;
let uranus = 5;
let neptune = 6;

let ageSum = 0;

let num1 = Number(prompt('Please enter your Earth weight: '));

console.log(num1);
console.log('Thank you, now please choose from our planet selection: 1. Venus, 2. Mars, 3. Jupiter, 4. Saturn, 5. Uranus, 6. Neptune: ')

let num2 = Number(prompt('> '));
console.log(num2);
 
if (num2 === 1){
  let ageSum = 0.78
  console.log('Thank you. Your weight for Venus is: ');
  console.log(num1 * ageSum);

}else if(num2 === 2){
  let ageSum = 0.39
  console.log('Thank you. Your weight for Mars is: ');
  console.log(num1 * ageSum);

}else if(num2 === 3){
  let ageSum = 2.65
  console.log('Thank you. Your weight for Jupiter is: ');
  console.log(num1 * ageSum);

}else if(num2 === 4){
  let ageSum = 1.17
  console.log('Thank you. Your weight for Saturn is: ');
  console.log(num1 * ageSum);

}else if(num2 === 5){
  let ageSum = 1.05
  console.log('Thank you. Your weight for Uranus is: ');
  console.log(num1 * ageSum);

}else if(num2 === 6){
  let ageSum = 1.23
  console.log('Thank you. Your weight for Neptune is: ');
  console.log(num1 * ageSum);

}else{
  console.log('Your choice is not available, please choose a number between 1-6.')
}