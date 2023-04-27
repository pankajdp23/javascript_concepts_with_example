const numbers = [10, 20, 30];
/*
const first = numbers[0];
const second = numbers[1];
const third = numbers[2];
*/

const [,, thirdValue] = numbers;
console.log( thirdValue)



const countries = [
    {
        country: 'USA',
        scores: [100, 20, 30]
    }, 
    {
        country: 'INDIA',
    }, 
    {
        country: 'Canada',
    }
]

const [{country, scores: [,firstScore] }] = countries;
console.log(country, firstScore)