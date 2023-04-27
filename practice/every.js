const numbers = [12, 20, 30,40];

// every method will return false immediately, If one of the element does not match the provided condition
console.log(numbers.every(number => {
    console.log('inside every');
    return number > 10;
}));

const statuses = [true, true, false, true];


console.log(statuses.every(status => {
    console.log('Check status',status);
    return status === true;
}));



