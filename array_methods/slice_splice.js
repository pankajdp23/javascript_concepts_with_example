/*
# JavaScript Array slice():  array.slice(start, end)

The slice() method returns selected elements in an array, as a new array.

The slice() method selects from a given start, up to a (not inclusive) given end.

The slice() method does not change the original array.

*/

//1. Select elements:
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); //["Orange", "Lemon"]

//2. Select elements using negative values:
const myBest = fruits.slice(-3, -1); // ["Lemon", "Apple"]







/*
# JavaScript Array splice(): array.splice(index, howmany, item1, ....., itemX)


The splice() method adds and/or removes array elements.

The splice() method overwrites the original array.
*/

//1. At position 2, add 2 elements:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

fruits2.splice(2, 0, "Lemon", "Kiwi"); //["Banana", "Orange", "Lemon", "Kiwi"...]

//2. At position 2, remove 2 items:
const fruits3 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits3.splice(2, 2); // ["Banana", "Orange", "Kiwi"]



//3. At position 2, add new items, and remove 1 item:
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.splice(2, 1, "Lemon", "Kiwi"); //["Banana", "Orange", "Lemon", "Kiwi"...]
