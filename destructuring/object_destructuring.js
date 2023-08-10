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
console.log(userName, age, city, state ) 


//Destructuring Nested Objects

// Example 1
const obj = {
    id: 1,
    name: 'Yogesh',
    age: 30,
    education: {
      degree: 'Bachelor'
    }
  };
  
  const {id, education: {degree}} = obj;
  
  console.log(id, degree); //1 Bachelor


  // Example 2
  const obj1 = {
    ids: 1,
    name: 'Yogesh',
    age: 30,
    education: {
      degree: ['Bachelor', 'Master', 'Diploma', 'Other']
    }
  };
  
  const {ids, education: {degree: [,second, last], college = ' Default Name ABC'}} = obj1;
  
  console.log(id, second, last, college); //1 Master Diploma Default Name ABC


  // Example 3
  const personsInfo = {
    company: 'sp-coder',
    persons: [{
        id: 1,
        name: 'Adil',
        friedsList: {
            friend1: 'Nabil',
            friend2: 'Habib'
        }
    }, {
        id: 2,
        name: 'Arif',
        friedsList: {
            friend1: 'alvi',
            friend2: 'avi'
        }
    }]
};

const {company, persons:[, {name, friedsList:{friend1, friend2}}]} = personsInfo

console.log(company, friend1, friend2); // sp-coder alvi avi
