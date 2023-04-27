const numbers = [ 10,20,30];
for(let i=0;i<numbers.length;i++) {
    console.log('1', numbers[i]);
}

console.log('value', numbers.forEach(function(value, index, array) {
    console.log('2', value, index, array);
    return 10;
}));