const num = 'number';

function CheckArgument(value) {
  isPrime = true;
  for (let j = 2; j < value; j++) {
    if (value % j == 0) {
      isPrime = false;
      break;
    }
  }
  if ((value == 1) || (value == 0)) {
    isPrime = false;
  }
}

function CheckIsPrime(value) {
  if (isPrime) {
    console.log(value + ' is prime number');
  } else {
    console.log(value + ' is not prime number');
  }
}


function isPrimeNumber(value) {
  if (typeof value == num) {
    CheckArgument(value);
    CheckIsPrime(value);
  } else {
    if (typeof value == 'object') {
      if (value.length != 0) {
        for (let i = 0; i < value.length; i++) {
          if (typeof value[i] == num) {
            CheckArgument(value[i]);
            CheckIsPrime(value[i]);
          } else {
            console.log(value[i] + ' invalid array element')
          }      
        }
      } else {
        console.log('array is empty')
      }
    } else {
      console.log(value[i] + ' invalid input')
    }
  }     
}