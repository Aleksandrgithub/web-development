function isPrimeNumber(a) {
	isPrime = true
    if (typeof a == 'number') {
        for (let j = 2; j < a; j++) {
        if (a % j == 0) {
            isPrime = false;
            break;
        }
        }
        if (isPrime) {
            console.log(a + ' is prime number')
        }
        else {
            console.log(a + ' is not prime number')
        }
    }

    else {
        if (typeof a == 'object') {
            for (let i = 0; i < a.length; i++) {
                for (let j = 2; j < a[i]; j++) {
                    if (a[i] % j == 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    console.log(a[i] + ' is prime number')
                }
                else {
                    console.log(a[i] + ' is not prime number')
                }    
            }
        }
    }
    	
}