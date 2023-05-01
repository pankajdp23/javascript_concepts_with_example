/*
# JavaScript For In:

The For In Loop
The JavaScript for in statement loops through the properties of an Object:

Syntax
for (key in object) {
  code block to be executed
}

*/

const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}

//Result: JohnDoe25

/*
Example Explained:
1.The for in loop iterates over a person object
2.Each iteration returns a key (x)
3.The key is used to access the value of the key
4.The value of the key is person[x]
*/

/*
# Note:
Do not use for in over an Array if the index order is important.

The index order is implementation-dependent, and array values may not be accessed in the order you expect.

It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
*/