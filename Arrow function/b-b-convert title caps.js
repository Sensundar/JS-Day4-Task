//Convert all the strings to title caps in a string array

let titleCapString = (string) => {
    let newString = [];
    for (let strings of string){
        strings = (strings.slice(0,1).toUpperCase()+strings.slice(1).toLowerCase());
        newString.push(strings)
        }return newString;
}

let string = ['senthil', 'sarAnya', 'kaRan', 'suThan'];
console.log(titleCapString(string))