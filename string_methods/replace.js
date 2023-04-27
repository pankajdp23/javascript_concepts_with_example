/* https://www.w3schools.com/js/js_string_methods.asp
# Replacing String Content

# Note:
The replace() method replaces a specified value with another value in a string
The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match
*/

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools"); //Please visit W3Schools!


// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
let newText1 = text.replace("MICROSOFT", "W3Schools"); // Not Work !!!!

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
let newText2 = text.replace(/MICROSOFT/i, "W3Schools"); //Please visit W3Schools!

// Note: Regular expressions are written without quotes.
//To replace all matches, use a regular expression with a /g flag (global match):
let text1 = "Please visit Microsoft and Microsoft!";
let newText3 = text1.replace(/Microsoft/g, "W3Schools"); //Please visit W3Schools and W3Schools!


/*

JavaScript String ReplaceAll()
In 2021, JavaScript introduced the string method replaceAll():

text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
*/