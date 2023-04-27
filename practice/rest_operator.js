// function add(...numbers) { // rest operator
//     console.log('numbers',numbers);
//     for(let i = 0; i < numbers.length;i++) {
// console.log(numbers[i])
//     }
// }

// add(1,2,3,4,5,6);

const numbers = [1,2,3,4,5,6];
const [a, b, ...rest] = numbers; // array rest operator ====> left side
console.log('1,2',a,b)
console.log('rest 3,4,5,6', rest)


console.log('numbers', ...numbers) //spread operator

const user = {
 name: 'Mike',
 age: 30
} ;


const obj = {};
console.log('keys', Object.keys(user))
Object.keys(user).forEach(function(key) {
    obj[key] = user[key];
});
console.log('obj', obj)

const obj1 = {
    gender: 'male',
    ...user, // spread operator
    salary: 10000,
    name: 'John',
};

console.log('obj1', obj1)

const {gender, ...obj2} = obj1; // object rest operator ====> left side
console.log('gender', gender)
console.log('obj2', obj2)
console.log('obj1', obj1)

console.log('before obj1', obj1)
delete obj1.name;

console.log('after obj1', obj1)