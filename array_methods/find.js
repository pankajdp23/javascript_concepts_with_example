
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