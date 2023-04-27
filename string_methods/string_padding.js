/*

# JavaScript String Padding:
ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

JavaScript String padStart()
The padStart() method pads a string from the start.

It pads a string with another string (multiple times) until it reaches a given length.

*/

// 1. Pad a string with "0" until it reaches the length 4:
let text = "5";
let padded = text.padStart(4,"0"); //0005

// 2. Pad a string with "x" until it reaches the length 4:
let text1 = "5";
let padded1 = text1.padStart(4,"x"); //xxx5


/*
# Note:
The padStart() method is a string method. padStart() is an ECMAScript 2017 feature.

To pad a number, convert the number to a string first.

See the example below.
*/

let numb = 5;
let text2 = numb.toString();
let padded2 = text2.padStart(4,"0"); //0005



/*
# JavaScript String padEnd()
The padEnd() method pads a string from the end.

It pads a string with another string (multiple times) until it reaches a given length.

# Note:
The padEnd() method is a string method.

To pad a number, convert the number to a string first.
*/
let text3 = "5";
let padded3 = text3.padEnd(4,"0"); //5000