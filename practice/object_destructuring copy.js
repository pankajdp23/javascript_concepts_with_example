const user = {
    email: 'mike@example.com',
    age: 30,
    // name: 'mike'
    location: {
        city: 'Pune',
        state: 'MH'
    }
}
/*
const city = user.location.city;
const age = user.age;
const state = user.location.state;
const name = user.name;
 */

const {name = 'Guest', age: userAge = '0', email, location: useLocation = {city}} = user

console.log(name, userAge, email, useLocation, city)

// const {name:userName = 'Guest', age: userAGe = "0", location: userLocation} = user;
// const {city, state} = location;
// console.log(name, age, city, state ) 
