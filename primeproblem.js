// Function to check if a number is prime of not


function checkPrime(num){
  counter=0;
  for (let i=1;i<=num;i++){
    if(num%i==0){
      counter++;
    }
  }
  if(counter==2){
    return true;
  }
  return false;
}

let ans=checkPrime(4);
  (ans==true)?console.log("Prime"):console.log("Not Prime");