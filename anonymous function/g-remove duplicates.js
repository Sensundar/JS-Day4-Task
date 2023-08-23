//Remove duplicates from an array...

let removeDuplicate = function (array){
    let result = [...new Set(array)];
    return result;
}

let array = [1, 5, 3, 8, 1, 8, 6, 9, 3]
console.log(removeDuplicate(array));