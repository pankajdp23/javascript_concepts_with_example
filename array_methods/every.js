/*
# JavaScript Array every():
The every() method executes a function for each array element.

The every() method returns true if the function returns true for all elements.

The every() method returns false if the function returns false for one element.

The every() method does not execute the function for empty elements.

The every() method does not change the original array

*/


const numbers = [12, 20, 30,40];

// every method will return immediately If one of the element does not match the provided condition
console.log(numbers.every(number => {
    console.log('inside every');
    return number > 10;
}));

const statuses = [true, true, true, true];


console.log(statuses.every((status, index, array) => status === true));


