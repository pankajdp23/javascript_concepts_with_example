/*
# JavaScript Array toString(): array.toString()

The toString() method returns a string with array values separated by commas.

The toString() method does not change the original array.

# Note:
Every JavaScript object has a toString() method.

The toString() method is used internally by JavaScript
when an object needs to be displayed as a text (like in HTML), 
or when an object needs to be used as a string.

Normally, you will not use it in your own code.

*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.toString(); // Banana,Orange,Apple,Mango