//Rotate an array by k times

let rotateArray = function (array, rotate){
    let actualRotate = (rotate % array.length);
    //console.log(typeof(actualRotate))
    let rotatedArray = [];
    for (let i=0; i<array.length; i++){
        let newIndex = ((i + array.length - actualRotate) % array.length);
        //console.log(newIndex)
        rotatedArray[newIndex]=array[i];
        //console.log(rotatedArray)
    }
    return rotatedArray;
}

let array = [1, 2, 3, 4, 5];
let rotate = 7;
console.log(rotateArray(array, rotate));