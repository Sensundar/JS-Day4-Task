//Sum of all numbers in an array

let sumNumbers = function (numbers){
    let sum =0;
    for(let value of numbers){
        sum+=value;
    }return sum;
    }

let numbers = [3, 32, 5, 22, 65, 1, 6];
console.log(sumNumbers(numbers));