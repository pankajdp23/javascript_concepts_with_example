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