/*
# JavaScript Array forEach():
The forEach() method calls a function for each element in an array.

The forEach() method is not executed for empty elements.

*/
//1. Calls a function for each element in fruits:
const fruits = ["apple", "orange", "cherry"];
 
function myFunction(item, index) {
    text += index + ": " + item + "<br>"; 
  }
fruits.forEach(myFunction);
/*
Result: 
0: apple
1: orange
2: cherry
*/

const numbers = [ 10,20,30];
for(let i=0;i<numbers.length;i++) {
    console.log('1', numbers[i]);
}

console.log('value', numbers.forEach(function(value, index, array) {
    console.log('2', value, index, array);
    return 10;
}));


//2. Compute the sum:
let sum = 0;
const numbers1 = [65, 44, 12, 4];
numbers1.forEach(myFunction);

function myFunction(item) {
  sum += item;
}
//Result = 125


//3. Multiply each element:
const numbers2 = [65, 44, 12, 4];
numbers2.forEach(myFunction) //Result: 650,440,120,40

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
