/*
# Extracting String Characters:
There are 3 methods for extracting string characters:

1.charAt(position)
2.charCodeAt(position)
3.Property access [ ]
*/

/* 1.JavaScript String charAt():
The charAt() method returns the character at a specified index (position) in a string:*/
let text = "HELLO WORLD";
let char = text.charAt(0); //H



/* 2.JavaScript String charCodeAt():
The charCodeAt() method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).*/
let text1 = "HELLO WORLD";
let char1 = text1.charCodeAt(0); //72



/* 3. Property Access
ECMAScript 5 (2009) allows property access [ ] on strings:*/
let text2 = "HELLO WORLD";
let char2 = text[0]; //H


/*
# Note:
Property access might be a little unpredictable:

1.It makes strings look like arrays (but they are not)
2.If no character is found, [ ] returns undefined, while charAt() returns an empty string.
3.It is read only. str[0] = "A" gives no error (but does not work!)
*/
let text3 = "HELLO WORLD";
text3[0] = "A";    // Gives no error, but does not work



/*
####### Split: string.split(separator, limit)
The split() method splits a string into an array of substrings.

The split() method returns the new array.

The split() method does not change the original string.

If (" ") is used as separator, the string is split between words.




# Converting a String to an Array:
If you want to work with a string as an array, you can convert it to an array.

# JavaScript String split():
A string can be converted to an array with the split() method

If the separator is omitted, the returned array will contain the whole string in index [0].

If the separator is "", the returned array will be an array of single characters:
*/
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe

let text4 = "How are you doing today?";
const myArray0 = text4.split(" "); //["How", "are", "you", "doing", "toda...]
console.log('myArray', myArray0);

//Split the characters, including spaces:
const myArray1 = text4.split(""); // ["H", "o", "w", " ", "a", "r", "e", ...]

//Use the limit parameter:
const myArray2 = text4.split(" ", 3);// ["How", "are", "you"]


// Use a letter as a separator:
const myArray3 = text4.split("o"); //["H", "w are y", "u d", "ing t", "da...]

// If the separator parameter is omitted, an array with the original string is returned:
const myArray = text.split(); //  ["How are you doing today?"]



/*

To convert an object to a string representation in JavaScript, 
you can use the JSON.stringify() method. 
This method serializes a JavaScript object to a JSON string format. Here's how you can use it:

*/

const myObject = { name: "John", age: 30, city: "New York" };

const jsonString = JSON.stringify(myObject);

console.log(jsonString); //{"name":"John","age":30,"city":"New York"}

/*
Keep in mind that JSON.stringify() only works for objects that are serializable to JSON. 
This means the object can only include data types that are supported by JSON: strings, numbers,
booleans, arrays, and other valid JSON objects. Any functions, symbols, or non-serializable values will be omitted or 
converted to null in the resulting JSON string.


If you want to reverse the process and convert a JSON string back into a JavaScript object, 
you can use the JSON.parse() method:
*/

const jsonString1 = '{"name":"John","age":30,"city":"New York"}';

const parsedObject = JSON.parse(jsonString1);

console.log(parsedObject); // { name: 'John', age: 30, city: 'New York' }

/* Note : Remember that parsing JSON strings using JSON.parse() only works for valid JSON strings. 
If the input is not properly formatted JSON, an error will be thrown. */