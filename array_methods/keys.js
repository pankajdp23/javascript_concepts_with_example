/*
# JavaScript Array keys(): array.keys()

The keys() method returns an Array Iterator object with the keys of an array.

The keys() method does not change the original array. 
*/

//1. Create an Array Iterator object, containing the keys of the array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}

/* Result:
0
1
2
3 
*/

//2. Use the built in Object.keys() Method:
const keys1 = Object.keys(fruits); // ["0", "1", "2", "3"]