/*
# JavaScript Array flat():
The flat() method concatenates sub-array elements.

Syntax: array.flat(depth)
depth:	(Optional) How deep a nested array should be flattened.Default is 1.

*/

//1. Create a new array with the sub-array elements concatenated:
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); // [1, 2, 3, 4, 5, 6]

const myArr1 = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr1 = myArr1.flat(2); // [1, 2, 3, 4, 5, 6, 7, 8]