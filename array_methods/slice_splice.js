/*
# JavaScript Array slice():  array.slice(start, end)

The slice() method returns selected elements in an array, as a new array.

The slice() method selects from a given start, up to a (not inclusive) given end.

The slice() method does not change the original array.

The slice() method is used to create a new array that contains a portion of the elements from 
the original array. It does not modify the original array. 
slice() takes two arguments: the starting index (inclusive) and the ending index (exclusive) of the slice.
If no arguments are provided, slice() returns a shallow copy of the entire array.

*/

//1. Select elements:
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); //["Orange", "Lemon"]

//2. Select elements using negative values:
const myBest = fruits.slice(-3, -1); // ["Lemon", "Apple"]

const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.slice(1, 4); //[2, 3, 4]
const newArray1 = originalArray.slice(2); // [3, 4, 5]

// If no arguments are provided, slice() returns a shallow copy of the entire array.
const newArray2 = originalArray.slice(); // [1, 2, 3, 4, 5]





/*
# JavaScript Array splice(): array.splice(index, howmany, item1, ....., itemX)

The splice() method adds and/or removes array elements.

The splice() method overwrites the original array.
*/

//1. At position 2, add 2 elements:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon", "Kiwi"); //["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
console.log('fruits2', fruits2)

//2. At position 2, remove 2 items:
const fruits3 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits3.splice(2, 2); // ["Banana", "Orange", "Kiwi"]
console.log('fruits3', fruits3)

//3.
const originalArray1 = [1, 2, 3, 4, 5];
const removedElements = originalArray1.splice(1, 2); // Removes [2, 3]
// originalArray1 is now [1, 4, 5]

//4. use splice() to insert elements:
const originalArray2 = [1, 2, 3, 4, 5];
originalArray2.splice(2, 0, 6, 7); // Inserts 6 and 7 at index 2
// originalArray2 is now [1, 2, 6, 7, 3, 4, 5]
/*


# Summary:

slice() creates a new array by extracting a portion of elements from the original array, 
leaving the original array unchanged.

splice() modifies the original array by adding or removing elements in-place, 
and it also returns an array containing the removed elements.

*/