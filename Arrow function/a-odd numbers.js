//Print odd numbers in an array

let findOddNumbers = (array) =>{
    let oddArray = [];
    for (let odd of array){
        if(odd % 2 === 1){
            oddArray.push(odd);          
        }
    }return oddArray;
}


let array = [1, 3, 4, 6, 5, 11, 14, 17, 21];
console.log(findOddNumbers(array));