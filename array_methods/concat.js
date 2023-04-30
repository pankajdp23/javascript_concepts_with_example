/*
# JavaScript Array concat():
The concat() method concatenates (joins) two or more arrays.

The concat() method returns a new array, containing the joined arrays.

The concat() method does not change the existing arrays.

Syntax: array1.concat(array2, array3, ..., arrayX)
Parameter: array1,... (Required) The array(s) to be concatenated.

Return Value: An array(type)	The content from the joined arrays.
*/

//1. Join two arrays:
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2); // Cecilie,Lone,Emil,Tobias,Linus

//2. Join three arrays:
const arr3 = ["Robin"];
const children1 = arr1.concat(arr2, arr3); // Cecilie,Lone,Emil,Tobias,Linus,Robin