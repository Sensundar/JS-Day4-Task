//Return all the palindromes in an array

let array = ['malayalam', 'tamil', 'radar', 'level', 'madam', 'senthil' ];

console.log(((array) =>{
    let palindromArray = [];
    for ( let string of array){
        if(string === string.split('').reverse().join('')){
            palindromArray.push(string);
        }
    }return palindromArray;

} )(array));