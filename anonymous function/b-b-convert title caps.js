//Convert all the strings to title caps in a string array

let titleCapString = function (string){
    let newString = [];
    let stringSize = string.length;
    for (let i=0; i<stringSize; i++){
        string[i]=((string[i].slice(0,1).toUpperCase())+(string[i].slice(1).toLowerCase()));
        newString.push(string[i])
    }return newString;
    
}

let string = ['senthil', 'sarAnya', 'kaRan', 'suThan']
console.log(titleCapString(string));