//Convert all the strings to title caps in a string array

let string = ['senthil', 'sarAnya', 'kaRan', 'suThan'];
((string) => {
    for (let value of string){
        value=value.slice(0,1).toUpperCase()+value.slice(1).toLowerCase();
        console.log(value)
    }
})(string);

