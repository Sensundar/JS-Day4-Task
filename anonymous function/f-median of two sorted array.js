//Return median of two sorted arrays of the same size...

let medianValue = function (array1,array2){
    let newArray = array1.concat(array2).sort();
    let middleIndex = [(newArray.length / 2),((newArray.length / 2)+1)]
    let medianValue = (middleIndex[0]+middleIndex[1])/2
    return medianValue;    
}

let array1 = [1, 5, 3, 4, 2];
let array2 = [2, 9, 4, 6, 8];
console.log(medianValue(array1,array2));