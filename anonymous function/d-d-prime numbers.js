//Return all the prime numbers in an array

//to check whether number is prime or not
let isPrime = function (value){
    if(value <=1){return false;}
    for (let i=2; i<value; i++){
        if(value % i === 0){ return false;}
    }return true;
}

//anonymous function to find prime numbers in an existing array
let findPrimennumbers = function(numbers){
    let primeNumbers=[];
    for (let value of numbers){
        if(isPrime(value)){
            primeNumbers.push(value)
        }
    }return primeNumbers;
}

let numbers = [1, 3, 5, 6, 9, 17, 19, 21, 15]
console.log(findPrimennumbers(numbers));