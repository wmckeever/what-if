const prompt = require('prompt-sync')({sigint: true});


let num1 = Number(prompt('Please enter a number to see if it is divisible by 3, 5 or both: '));

console.log(num1);


if (num1 % 15 == 0 ){ 
  console.log('Fizzbuzz')

}else if (num1 % 3 === 0){

  console.log('Fizz')

}else if(num1 % 5 === 0){
  console.log('Buzz')
  
}else {
  console.log('Please try again.')
}



