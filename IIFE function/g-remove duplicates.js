//Remove duplicates from an array
let array = [1, 5, 3, 8, 1, 8, 6, 9, 3];

((array) => {
    console.log([...new Set(array)]);
})(array);
