//Return all the palindromes in an array

let findPalindrom = function (array){
    let palindromArray = [];
    for (let value of array){

        if (value === (value.split('').reverse().join(''))){
            palindromArray.push(value)
        }
    }return palindromArray;
}

let array = ['malayalam', 'tamil', 'radar', 'level', 'madam', 'senthil' ]
console.log(findPalindrom(array));