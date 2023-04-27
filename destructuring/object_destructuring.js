const user = {
    email: 'mike@example.com',
    age: 30,
    name: 'mike'
}
/*
const city = user.location.city;
const age = user.age;
const state = user.location.state;
const name = user.name;
 */

const {name:userName = 'Guest', age: userAGe = "0", location: userLocation} = user;
const {city, state} = location;
console.log(name, age, city, state ) 
