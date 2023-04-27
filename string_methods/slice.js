/*
Reference: https://www.w3schools.com/js/js_string_methods.asp
# Extracting String Parts
There are 3 methods for extracting a part of a string:

1.slice(start, end)
2.substring(start, end)
3.substr(start, length)


JavaScript String slice()
slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: start position, and end position (end not included).
*/

// 1. Slice out a portion of a string from position 7 to position 13:
let text = "Apple, Banana, Kiwi"; 
let part = text.slice(7,13); //Output: Banana
console.log(part); 


//2. If you omit the second parameter, the method will slice out the rest of the string:
let part1 = text.slice(7) // Banana, Kiwi

//3. If a parameter is negative, the position is counted from the end of the string:
let part2 = text.slice(-12); // Banana, Kiwi

//4. This example slices out a portion of a string from position -12 to position -6:
let part3 = text.slice(-12, -6); // Banana


/********** 

# JavaScript String substring()
substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().
Note: If you omit the second parameter, substring() will slice out the rest of the string.

***********/
let str = "Apple, Banana, Kiwi";
let subStrTest = str.substring(7, 13); //Banana

/*
Javascript is the synchronous single-threaded language but with the help of event-loop and promises, JavaScript is used to do asynchronous programming.
*/


/**********
 # JavaScript String substr()
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.

 * ***********/
let str1 = "Apple, Banana, Kiwi";
let partSubstr = str1.substr(7, 6); //Banana


//1. If you omit the second parameter, substr() will slice out the rest of the string.
let partSubstr1 = str1.substr(7); //Banana, Kiwi

//2. If the first parameter is negative, the position counts from the end of the string.
let partSubstr2 = str.substr(-4); // Kiwi


