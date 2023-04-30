/*
# JavaScript Array findIndex():

The findIndex() method executes a function for each array element.

The findIndex() method returns the index (position) of the first element that passes a test.

The findIndex() method returns -1 if no match is found.

The findIndex() method does not execute the function for empty array elements.

The findIndex() method does not change the original array.
*/


//1. Find the first element with a value over 18:
const ages = [3, 10, 18, 20];

ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}
// Result: 3(3rd Index element)