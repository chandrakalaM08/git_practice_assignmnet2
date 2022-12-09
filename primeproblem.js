// Function to check if a number is prime of not


function checkPrime(num){
  let flag = false;

  if(num === 1){
    return false;
  }

  for (let i = 0 ; i<= num; i++){
    if(num % i !== 0){
      flag = true;
    }
  }
  return flag;
}

console.log(checkPrime(4));