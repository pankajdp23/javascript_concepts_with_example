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



/*
The return value of the comparison function determines the sort order:

If the return value is a negative number, a is considered smaller than b, and a will be placed before b in the sorted array.
If the return value is zero, a and b are considered equal, and their order remains unchanged.
If the return value is a positive number, b is considered smaller than a, and b will be placed before a in the sorted array.
By subtracting b from a in the comparison function (return a - b;), you can achieve ascending order sorting. This works because the comparison function effectively determines whether a is smaller, equal, or larger than b by evaluating the numerical difference between them.

For example, let's consider the array [4, 2, 8, 6, 1]. When using the comparison function return a - b;, the sorting process proceeds as follows:

The comparison function compares 4 and 2 by subtracting 2 from 4, resulting in a positive number (2). This indicates that 4 is greater than 2, so their order is swapped.
Array: [2, 4, 8, 6, 1]
The comparison function compares 4 and 8 by subtracting 8 from 4, resulting in a negative number (-4). This indicates that 4 is smaller than 8, so their order remains unchanged.
Array: [2, 4, 8, 6, 1]
The comparison function compares 8 and 6 by subtracting 6 from 8, resulting in a positive number (2). This indicates that 8 is greater than 6, so their order is swapped.
Array: [2, 4, 6, 8, 1]
The comparison function compares 8 and 1 by subtracting 1 from 8, resulting in a positive number (7). This indicates that 8 is greater than 1, so their order is swapped.
Array: [2, 4, 6, 1, 8]
The comparison function compares 6 and 1 by subtracting 1 from 6, resulting in a positive number (5). This indicates that 6 is greater than 1, so their order is swapped.
Array: [2, 4, 1, 6, 8]

*/


