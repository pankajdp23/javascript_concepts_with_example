/*
# JavaScript Array.from():
The Array.from() method returns an array from any object with a length property.

The Array.from() method returns an array from any iterable object.
Array.from()
Array.from() is a static property of the JavaScript Array object.

You can only use it as Array.from().

Using x.from(), where x is an array will return undefined.
*/

let text = "ABCDEFG"
const myArr = Array.from(text); //  ["A", "B", "C", "D", "E", "F", "G"]
