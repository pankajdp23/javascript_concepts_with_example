/*
# JavaScript Array valueOf():   array.valueOf()

The valueOf() method returns the array itself.

The valueOf() method does not change the original array.

fruits.valueOf() returns the same as fruits.

*/


//1. Get the value of fruits:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits.valueOf(); // ["Banana", "Orange", "Apple", "Mango...]

//2. fruits.valueOf() returns the same as fruits:
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const myArray1 = fruits1;  // ["Banana", "Orange", "Apple", "Mango...]