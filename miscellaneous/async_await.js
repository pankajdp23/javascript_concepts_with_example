const addNumbers = (a, b, c) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sum = a + b + c;
            if(typeof sum === 'number') {
               resolve(sum);
            } else {
                reject("Please enter only positive values")
            }
        }, 3000);
    });
};
/* 
addNumbers(10, 20, 30).then((result) => {
    console.log({result});
}).catch(err => console.log(err))*/

console.log('calling before')
const getResult = async ( ) => {
    try {
        const result = await addNumbers(10, '40', 30);
        console.log({result})
        const result1 = await addNumbers(result, 40, 30);
        console.log({result1})
    } catch (error) {
        console.log('errors', error)
    }
} 
//getResult();

(async function(){
    try {
        console.log('calling')
        const result = await addNumbers(10, '20', 30);
        console.log({result})
        const result1 = await addNumbers(result, 40, 30);
        console.log({result1})
    } catch (error) {
        console.log('errors', error)
    }                                          
})(); // IIFE - Immediately Invoked Function Expression syntax


console.log('calling after')

 async function print() {// async function always returns a promise fulfulled with the returned value
   // return "Hello";;
for(let i = 0; i<11111100000;i++);
return "hi"
   //return axios.get('https://jsonplaceholder.typicode.com/userss')
    //throw new Error('rejected');
    
}
//print().then(res => console.log({res})).catch(err => console.log('err_', err))
/*
const printResult = async () => {
    try {
        const value = await print();
        console.log({value})
    } catch (error) {
        console.log('caught err', error);
    }
}

printResult();*/
/*
print().then(output => {
    console.log('output', output)
}).catch(err => console.log(err))*/
const print1 = async function() {

}

const print2 = async () => {

}