/*
# JavaScript Array copyWithin():
The copyWithin() method copies array elements to another position in the array.

The copyWithin() method overwrites the existing values.

The copyWithin() method does not add items to the array.

# Syntax: array.copyWithin(target, start, end)

*/

// 1. Copy the first two array elements to the last two array elements:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0); // Banana,Orange,Banana,Orange

//2. Copy the first two array elements to the third and fourth position:
const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits1.copyWithin(2, 0, 2); //Banana,Orange,Banana,Orange,Kiwi,Papaya

