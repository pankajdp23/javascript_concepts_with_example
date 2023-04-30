/*
# JavaScript Array filter():
The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.

Syntax: array.filter(function(currentValue, index, arr), thisValue)
*/

//1. Return an array of all values in ages[] that are 18 or over:
const ages = [32, 33, 16, 40];
const result1 = ages.filter(checkAdult); // 32,33,40

function checkAdult(age) {
  return age >= 18;
}

const users = [
    { name: 'Mike Tyson', age: 10},
    { name: 'Jerry Tyson1', age: 30},
    { name: 'Alex Tyson2', age: 50},
    { name: 'Jerry Tyson1', age: 70}
];

/*
console.log('found', users.filter(user => {
    if(user.name.includes("Jerry")) {
        return true;
    }
    return false;
}));*/


const searchTerm = "jerry";
const result = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
console.log(result.length > 0 ? 'found': 'not found');
