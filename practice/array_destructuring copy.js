const numbers = [10, 20, 30];


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

// const [{country, scores:[first]}, {country}] = countries;

// console.log(country, first, firstIndex)

const [{country, scores: [,firstScore] }] = countries;
console.log(country, firstScore)