/*
# String Search Methods:
1.String indexOf()
2.String lastIndexOf()
3.String search()
4.String match()
5.String matchAll()
6.String includes()
7.String startsWith()
8.String endsWith()
*/

/* 1.JavaScript String indexOf()
The indexOf() method returns the index (position) the first occurrence of a string in a string:*/
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate"); //7

// Note:JavaScript counts positions from zero. 0 is the first position in a string, 1 is the second, 2 is the third, ..


/* 2. JavaScript String lastIndexOf()
The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:*/
let text1 = "Please locate where 'locate' occurs!";
let index1 = text1.lastIndexOf("locate"); //22


//Note: Both indexOf(), and lastIndexOf() return -1 if the text is not found:
let text2 = "Please locate where 'locate' occurs!";
let index2 = text2.lastIndexOf("John"); // -1


/* 3. JavaScript String search()
The search() method searches a string for a string (or a regular expression) and returns the position of the match:*/ 
let text3 = "Please locate where 'locate' occurs!";
text3.search("locate"); //7


//The search() method returns the position of the first occurrence of a string in a string. Return the position of the first occurrence of a regular expression:
let text4 = "Please locate where 'locate' occurs!";
text4.search(/locate/); //7

/* # Did You Notice?
The two methods, indexOf() and search(), are equal?

They accept the same arguments (parameters), and return the same value?

The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions)./*



/***********************************
# JavaScript String match()
The match() method returns an array containing the results of matching a string against a string (or a regular expression).

Note: If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.
*/
let text5 = "The rain in SPAIN stays mainly in the plain";
const myArr = text5.match("ain");
/********************* console.log(myArr);
myArr:[
  'ain',
  index: 5,
  input: 'The rain in SPAIN stays mainly in the plain',
  groups: undefined
]
*/



/*
The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
# Notes:
1. matchAll() is an ES2020 feature.

2. matchAll() does not work in Internet Explorer.
*/


/*
# JavaScript String includes():
The includes() method returns true if a string contains a specified value.

Otherwise it returns false.
# Note:
1.includes() is case sensitive.
2.includes() is an ES6 feature.
3.includes() is not supported in Internet Explorer.
*/

// 1. Check if a string includes "world":
let text6 = "Hello world, welcome to the universe.";
text6.includes("world"); // true

//2. Check if a string includes "world". Start at position 12:
text6.includes("world", 12); //false



/********
 
# JavaScript String startsWith(): 
The startsWith() method returns true if a string begins with a specified value.

Otherwise it returns false:

#Note:
startsWith() is case sensitive.

startsWith() is an ES6 feature.

startsWith() is not supported in Internet Explorer.
 * ******** */
let text7 = "Hello world, welcome to the universe.";
text7.startsWith("Hello"); //true

let text8 = "Hello world, welcome to the universe.";
text8.startsWith("world") //false

//A start position for the search can be specified:
text8.startsWith("world", 5) //false

text8.startsWith("world", 6) // true



/*****

# JavaScript String endsWith():
The endsWith() method returns true if a string ends with a specified value.

Otherwise it returns false:

 */

//Check if a string ends with "Doe":
let text9 = "John Doe";
text9.endsWith("Doe"); //true


//Check if the 11 first characters of a string ends with "world":
let text10 = "Hello world, welcome to the universe.";
text10.endsWith("world", 11); //false

