/*

Converting to Upper and Lower Case
A string is converted to upper case with toUpperCase():

A string is converted to lower case with toLowerCase():

*/
let text1 = "Hello World!";
let text2 = text1.toUpperCase(); //HELLO WORLD!

let text3 = text1.toLowerCase();  // hello world!


// JavaScript String concat() joins two or more strings:
let text_1 = "Hello";
let text_2 = "World";
let text_3 = text_1.concat(" ", text_2); //Hello World!


//The concat() method can be used instead of the plus operator. These two lines do the same:
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");

/*
Note: Note
All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.
*/