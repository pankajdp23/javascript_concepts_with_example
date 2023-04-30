/*
# JavaScript Array flatMap():

The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

flatMap() creates a new array from calling a function for every array element.

flatMap() does not execute the function for empty elements.

flatMap() does not change the original array.

flatMap() does not change the original array.

*/

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2); //[2, 4, 6, 8, 10, 12]