const numbers = [ 10,20,30];

const result = numbers.map(function(value, index, array) {
    return value  +1;
});
console.log('result', result);
console.log('numbers',numbers);

const users = [
    { name: 'Mike', age: 10},
    { name: 'Jerry', age: 30},
    { name: 'Alex', age: 50},
];

const ages=  users.map((user) => user.age);
console.log('ages', ages)


function getId() {
    return Date.now();
};

const getData = async () => {
    const {data} = await axios.get('https://randomuser.me/api?results=10');
    console.log(data.results);
    const users = data.results;
    /*const updated = users.map(user => {
        return {
            email: user.email,
            name: `${user.name.first} ${user.name.last}`,
            gender: user.gender
        }
    });
    */
    const updated = users.map(user => ({
        email: user.email,
        name: `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`,
        gender: user.gender,
        id: uuid.v4()
    }));
    console.log('updated', updated);
}

getData();

console.log('before', numbers);

console.log('after', numbers.map(number => {
    return {
        value: number + 2
    }
}));