var variable = "Global Level Variable";
let myObject = { 
 variable: "Object Level Variable", 
arrowFunction:() => { 
 console.log(this.variable); 
 },
regularFunction(){ 
 console.log(this.variable); 
 } 
};
myObject.arrowFunction(); 
myObject.regularFunction();
console.log("Welcome to Programiz!");

const numbers = [90, 150];
const name = "Yogesh"
const user = {
    name: 'Mike',
    numbers: [10, 20,30],
    display: () =>{
        console.log('before', this.name)
        numbers.forEach(function(number) {
           setTimeout(() => {
            console.log(number);
           }, 2000);
        });
       /*  setTimeout(() =>{
            console.log('this', this.numbers);
       }, 2000);  */
    }
}


user.display();