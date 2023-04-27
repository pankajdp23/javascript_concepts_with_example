const number = 10;
console.log('number: ' , number);

const isLoggeIn = false;
const username = "Mike";
console.log('usernmae', username);

let copy = username;
console.log('copy', copy);
copy = "Alex";


console.log('copy', copy);

console.log('username', username);

const user = {
    name: 'JErry',
    age: 40,
    location: {
        city: 'NY',
        state: {
            address: 'UK'
        }
    }
};

const user1 = {
    salary: 44000
}

const obj1 = {...user} // shallow copy in ES6
const obj3 = Object.assign({},  obj1, user1, { isMarried: false}) // shallow copy in ES5
obj1.age = 50;
const obj2 = {
    ...user, 
    location: {
        ...user.location,
        state: {
            address: 'USA'
        }
    }
}; // deep copy

console.log('user', user);
console.log('obj1', obj1);
console.log('obj2', obj2);
console.log('obj3', obj3);

obj2.location.city = 'London';


console.log('user', user);
console.log('obj2', obj2);

const arr = [10, 20];

const arr1 = arr;
console.log('arr', arr);
console.log('arr1', arr1);

arr1[1] = 40;
console.log('arr', arr);
console.log('arr1', arr1);

arr.forEach(number => {
    number = 50;
    console.log('number', number);
})
console.log('arr_', arr);

const users = [{
    name: 'Mike',
    age :50
},{
    name: 'Adam',
    age :30
},]



console.log('before', users);
users.forEach(user => {
    user.name = 'Ally';
    console.log('user', user);
})

console.log('original', users);