/*
# JavaScript Array indexOf():

The indexOf() method returns the first index (position) of a specified value.

The indexOf() method returns -1 if the value is not found.

The indexOf() method starts at a specified index and searches from left to right.

By default the search starts at the first element and ends at the last.

Negative start values counts from the last element (but still searches from left to right).

*/

//1. Find the first index of "Apple":
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple"); //2

//2. Start at index 3:
let index1 = fruits.indexOf("Apple", 3); //-1