//Return all the prime numbers in an array

//to check whether given number is prime or not

let isPrime = (value) => {
    if(value <= 1){return false;}
    for (let i=2; i<value; i++){
        if(value % i === 0){
            return false;
        }
    }return true;
}
//to find prime numbers
let findPrimennumbers = (numbers) =>{
    let primeNumber = [];
    for (let value of numbers){
        if(isPrime(value)){
            primeNumber.push(value);
        }
    }return primeNumber;
}
let numbers = [1, 3, 5, 6, 9, 17, 19, 21, 15];
console.log(findPrimennumbers(numbers));
