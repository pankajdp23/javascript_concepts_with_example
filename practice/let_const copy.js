let username = "Mike";
console.log(username)
console.log({username})
 username = "John"

 console.log('new', {username})

const isLoggedIn = true;

if(isLoggedIn) {
    let username = "Jerry";
    console.log(username);
    {
        let username = "Alex"
        console.log("nested", {username})
    }
}

// for(var i=0; i<10; i++) {
//     // console.log(i)
// }

// for(var i=0; i<10;i++) {
//     // console.log(i)
// }

// console.log('i', i)

for(let i=0; i<10;i++) {
    console.log('let', i)
}

// console.error('let i', i)

const isAuthenticated = true;

const numbers = [10,20,30];
console.log({numbers})

numbers.pop(20);

console.log({numbers})

const obj = {
    name: 'Mike', age:30
}
console.log(obj)
 obj.name = 'Alex'
 obj.age = 50;

 console.log(obj)

