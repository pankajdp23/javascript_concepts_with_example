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