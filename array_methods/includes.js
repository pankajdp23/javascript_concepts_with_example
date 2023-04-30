/*
# JavaScript Array includes():

The includes() method returns true if an array contains a specified value.

The includes() method returns false if the value is not found.

The includes() method is case sensitive.


Syntax : array.includes(element, start)

*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango"); // true


// Start the search at position 3:
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.includes("Banana", 3); //false