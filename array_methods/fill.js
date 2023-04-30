/*
# JavaScript Array fill():
The fill() method fills specified elements in an array with a value.

The fill() method overwrites the original array.

Start and end position can be specified. If not, all elements will be filled.

# Syntax: array.fill(value, start, end)
*/

//1. Fill all the elements with a value:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi"); //Kiwi,Kiwi,Kiwi,Kiwi

//2. Fill the last two elements:
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.fill("Kiwi", 2, 4); //Banana,Orange,Kiwi,Kiwi
