/*
# JavaScript Array find():
The find() method returns the value of the first element that passes a test.

The find() method executes a function for each array element.

The find() method returns undefined if no elements are found.

The find() method does not execute the function for empty elements.

The find() method does not change the original array.

Syntax: array.find(function(currentValue, index, arr),thisValue)
*/

//1. Find the value of the first element with a value over 18:
const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAge); //Result: 20
}

const users = [
    { name: 'Mike Tyson', age: 10},
    { name: 'Jerry Tyson1', age: 30},
    { name: 'Alex Tyson2', age: 50},
    { name: 'Jerry Tyson1', age: 70}
];

let obj;
for(let i=0;i<users.length; i++) {
if(users[i].name === 'Jerry Tyson1') {
 obj = users[i];
 break;
}
}
console.log('obj', obj);

obj = {};
users.forEach(user => {
    if(user.name === 'Jerry Tyson1') {
        obj = user;
    }
})

console.log('obj', obj);

console.log('obj', users.find((user) =>{
return user.name === 'Jerry Tyson1';
}));

const numbers=  [10, 20,30];
console.log('found', numbers.find(number => number ===50) || 10);