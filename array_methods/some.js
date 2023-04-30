/*
# JavaScript Array some():  array.some(function(value, index, arr), this)
The some() method checks if any array elements pass a test (provided as a callback function).

The some() method executes the callback function once for each array element.

The some() method returns true (and stops) if the function returns true for one of the array elements.

The some() method returns false if the function returns false for all of the array elements.

The some() method does not execute the function for empty array elements.

The some() method does not change the original array.

*/


const numbers = [9, 20, 30,40];

console.log(numbers.some(number => {
    console.log('inside some');
    return number > 10
})); // some method will return immediately If at-least one element matches the provided condition



//1. Check if any values are over 18:
const ages = [3, 10, 18, 20];

let test=ages.some(checkAdult); // true
function checkAdult(age) {
  return age > 18;
}