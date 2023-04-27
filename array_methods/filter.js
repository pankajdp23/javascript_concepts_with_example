
const users = [
    { name: 'Mike Tyson', age: 10},
    { name: 'Jerry Tyson1', age: 30},
    { name: 'Alex Tyson2', age: 50},
    { name: 'Jerry Tyson1', age: 70}
];

/*
console.log('found', users.filter(user => {
    if(user.name.includes("Jerry")) {
        return true;
    }
    return false;
}));*/


const searchTerm = "jerry";
const result = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
console.log(result.length > 0 ? 'found': 'not found');