
display1();

function display1() { // function declaration syntax
    console.log('display1')
}

const display2 = function () { // function expression syntax
    console.log('display2')
}

display2();

const display3 = () => {
    console.log('display3');
}
display3()

const sum = (a, b) => a+b;

console.log(sum(50,20))

const add = function () {
    console.log('arguments =========>',arguments)
    for(let i=0; i<arguments.length; i++) {
        console.log('i', arguments[i])
    }
}

console.log(add(1,2,3,4,5,6))


function logData() {
    console.log(this)
}

logData()

const numbers = [90, 150,200,250];

const user = {
    name: 'Mike',
    numbers: [10,20,30],
    display: () => {
        console.log('before', numbers)
        // numbers.forEach(function(number) {
        //     console.log(number)
        //     setTimeout( () => {
        //         console.log(number)
        //     }, 2000)
        // })
    }
}

user.display();