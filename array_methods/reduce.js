/*
# JavaScript Array reduce();
The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.

# Note:
At the first callback, there is no return value from the previous callback.

Normally, array element 0 is used as initial value, and the iteration starts from array element 1.

If an initial value is supplied, this is used, and the iteration starts from array element 0.

*/

//1. Subtract all numbers in an array:
const numbers1 = [175, 50, 25];

let test = numbers1.reduce(myFunc); //100

function myFunc(total, num) {
  return total - num;
} 


//2. Round all the numbers and display the sum:
const numbers3 = [15.5, 2.3, 1.1, 4.7];
let test1 = numbers3.reduce(getSum, 0); //24

function getSum(total, num) {
  return total + Math.round(num);
}



const numbers = [1, 2,3,4,5];

let sum = 0;
for(let i=0;i < numbers.length;i++) {
    sum = sum + numbers[i];
}
console.log('sum', sum);

sum =0;
numbers.forEach(number => sum += number);

console.log('sum', sum);

sum = 10;

console.log('reduce_sum', numbers.reduce((acc, number, index, array) => {
    return acc + number;
}), sum);

// accumulator = 0, number = 1, result = acc + number = 1
// accumulator = 1, number = 2 result = acc + number = 3
// accumulator = 3, number = 3 result = acc + number = 6
// accumulator = 6, number = 4 result = acc + number = 10
// accumulator = 10, number = 5 result = acc + number = 15

const students = [{
    id: 1,
    standing: true,
    sleeping: false
},
{
    id: 2,
    standing: true,
    sleeping: false
},
{
    id: 3,
    standing: false,
    sleeping: true
},

{
    id: 4,
    standing: false,
    sleeping: true
}]

const res  = students.reduce((acc, student) => {
    if(student.standing){
        return {
            standing: acc.standing + 1,
            sleeping: acc.sleeping 
        }
    } else if(student.sleeping){
        return {
            standing: acc.standing,
            sleeping: acc.sleeping  + 1
        }
    }
}, {
    standing: 0,
    sleeping: 0
})

console.log('res', res);