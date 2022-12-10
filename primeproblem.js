// Function to check if a number is prime of not


function checkPrime(num){

  let isPrime = true;

  if(number === 1){
    console.log("1 is neither Prime nor composite.")
  }
  else if(number <= 0){
    console.log(number,": Not a prime.");
  }
  else if(number > 2){
    for (let i = 2 ; i< number; i++){
      if(number % i === 0){
      isPrime = false;
      break;
      }
    }
    console.log(number,"is a prime : ",isPrime);
  }
}

checkPrime(4);