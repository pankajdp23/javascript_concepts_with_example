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