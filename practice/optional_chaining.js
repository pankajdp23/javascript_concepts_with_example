const user = {
    name: 'Mike',
    age :30,
    // location: {
    //     city: 'NY',
    //     state: 'NY',
    // }
};


/* if(user && user.location ) {
    const city = user.location.city;
} */

const userLocation = user.location 
console.log('userLocation', userLocation)
const {city, state} = userLocation || {};
const name = `${user.location?.firstName || ''} ${user.location?.lastName || ''}`;
console.log({city, state})

const numbers = [1,2];

const number = numbers?.[2];
console.log({number})

function display() {
    console.log('displaying')
}

display?.();