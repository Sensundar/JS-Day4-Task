// Return all the prime numbers in an array

let numbers = [1, 3, 5, 6, 9, 17, 19, 21, 15];

let isPrime = (value) => {
    if(value <= 1){return false;}
    for (let i=2; i<value; i++){
        if(value % i === 0){
            return false;
        }
    }return true;
}

//to find prime numbers
((numbers) =>{
    let primeNumber = [];
    for (let value of numbers){
        if(isPrime(value)){
            primeNumber.push(value);
        }
    }console.log(primeNumber);
})(numbers);

