const numbers = [9, 20, 30,40];

console.log(numbers.some(number => {
    console.log('inside some');
    return number > 10
})); // some method will return immediately If at-least one element matches the provided condition