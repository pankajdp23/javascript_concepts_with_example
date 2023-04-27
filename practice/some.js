const numbers = [9, 2, 30,40];

console.log(numbers.some(number => {
    console.log('inside some');
    return number > 10
})); // some method will return immediately true ,If at-least one element matches the provided condition