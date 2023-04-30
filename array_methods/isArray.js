/*
# JavaScript Array.isArray():

The isArray() method returns true if an object is an array, otherwise false.
 
# Array.isArray()
Array.isArray() is a static property of the JavaScript Array object.

You can only use it as Array.isArray().

Using x.isArray(), where x is an array will return undefined.

Syntax : Array.isArray(obj)
 */

//1. Check if an object is an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = Array.isArray(fruits); //true

//2. Check if another datatype is an array:
let text = "W3Schools";
let result1 = Array.isArray(text); // false