/*

# typeof:
The typeof operator returns a string indicating the type of the operand's value.

Syntax: typeof operand
operand
An expression representing the object or primitive whose type is to be returned.
*/


// Examples
// Basic usage
// Numbers
typeof 37 === "number";
typeof 3.14 === "number";
typeof 42 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // Despite being "Not-A-Number"
typeof Number("1") === "number"; // Number tries to parse things into numbers
typeof Number("shoe") === "number"; // including values that cannot be type coerced to a number

typeof 42n === "bigint";

// Strings
typeof "" === "string";
typeof "bla" === "string";
typeof `template literal` === "string";
typeof "1" === "string"; // note that a number within a string is still typeof string
typeof typeof 1 === "string"; // typeof always returns a string
typeof String(1) === "string"; // String converts anything into a string, safer than toString

// Booleans
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean"; // Boolean() will convert values based on if they're truthy or falsy
typeof !!1 === "boolean"; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Symbols
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// Objects
typeof { a: 1 } === "object";

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === "object";

typeof new Date() === "object";
typeof /regex/ === "object";

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

// Functions
typeof function () {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";


// # typeof null
// This stands since the beginning of JavaScript
typeof null === "object"




/*

Using new operator
All constructor functions called with new will return non-primitives ("object" or "function"). Most return objects, with the notable exception being Function, which returns a function.
*/
const str = new String("String");
const num = new Number(100);

typeof str; // "object"
typeof num; // "object"

const func = new Function();

typeof func; // "function"



/*
However, using typeof on lexical declarations (let const, and class) in the same block 
before the line of declaration will throw a ReferenceError. 
Block scoped variables are in a temporal dead zone from the start of the block 
until the initialization is processed, during which it will throw an error if accessed.
*/
typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = "hello";
class newClass {}