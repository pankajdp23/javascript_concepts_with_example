const addNumbers = (a, b, c) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sum = a + b + c;
            if(typeof sum === 'number') {
               resolve(sum);
            } else {
                reject("Please enter only positive values")
            }
        }, 2000);
    });
}
console.log('before calling addNumbers')

addNumbers(10, 20, 30).then((result) => {
    console.log({result});
    return result ;
}).then((response) => {
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('timeout');
            resolve(response)
        }, 1000)
    })
    /*addNumbers(response, 40, 10).then((response) => {
        console.log('response', response)
    }).catch((err) => {
        console.log(err)
    })
    console.log('response1', response)*/
    //return addNumbers(response, 40, 10)
}).then((response) => {
    console.log('response2', response)
    return addNumbers(response, 10, 10)
    }).then(final => {
        console.log('final', final)
    }).catch((err) => {
        console.log('error', err)
})

console.log('after calling addNumbers');

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.json()).then(response => {
//     console.log({response})
// }).catch(err => {
//     console.log('error', err)
// })

axios.get('https://jsonplaceholder.typicode.com/userss')
    .then((response) => console.log(('response', response.data)))
    .catch((err) => console.log(err.message));


