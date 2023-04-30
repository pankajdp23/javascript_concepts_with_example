/*
# JavaScript Array sort():
The sort() sorts the elements of an array.

The sort() overwrites the original array.

The sort() sorts the elements as strings in alphabetical and ascending order.


# Sort Compare Function
Sorting alphabetically works well for strings ("Apple" comes before "Banana").

But, sorting numbers can produce incorrect results.

"25" is bigger than "100", because "2" is bigger than "1".

You can fix this by providing a "compare function" (See examples below). 

*/

//1. Sort array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); //["Apple", "Banana", "Mango", "Orange...]

//2. Sort and then reverse the order:
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.sort();
fruits1.reverse(); // ["Orange", "Mango", "Banana", "Apple"]


//3. Sort numbers in ascending order:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b}); // [1, 5, 10, 25, 40, 100]

//4. Sort numbers in descending order:
points.sort(function(a, b){return b-a}); // [100, 40, 25, 10, 5, 1]