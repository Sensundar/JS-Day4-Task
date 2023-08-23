//Rotate an array by k times

let array = [1, 2, 3, 4, 5];
let rotate = 7;

(function(array,rotate) {
    let actualRotate=rotate%array.length;
    let rotatedArray = [];

    for (let i=0; i<array.length; i++){
        let newIndex = (i+array.length-actualRotate)%array.length;
        rotatedArray[newIndex]=array[i];
    }console.log(rotatedArray);

})(array,rotate);