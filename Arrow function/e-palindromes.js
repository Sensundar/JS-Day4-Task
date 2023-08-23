//Return all the palindromes in an array

let findPalindrom = (array) => {
    let findPalindrom = [];
    for (let value of array){
        if (value === value.split('').reverse().join('')){
            findPalindrom.push(value);
        }
    }return findPalindrom;

}


let array = ['malayalam', 'tamil', 'radar', 'level', 'madam', 'senthil' ];
console.log(findPalindrom(array));