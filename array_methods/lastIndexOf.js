/* 
# JavaScript Array lastIndexOf(): array.lastIndexOf(item, start)

The lastIndexOf() method returns the last index (position) of a specified value.

The lastIndexOf() method returns -1 if the value is not found.

The lastIndexOf() starts at a specified index and searches from right to left.

By defalt the search starts at the last element and ends at the first.

Negative start values counts from the last element (but still searches from right to left).

*/


//1. Find the last index of "Apple":
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let index = fruits.lastIndexOf("Apple"); //2


//2. More than one apple:
const fruits1 = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
let index1 = fruits1.lastIndexOf("Apple"); // 5




/*
# JavaScript Array length:
The length property sets or returns the number of elements in an array.
*/

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits2.length; // 4


const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits.length = 2; // ["Apple", "Orange"]