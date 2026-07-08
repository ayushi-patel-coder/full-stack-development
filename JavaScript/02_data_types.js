// ============================================
// Topic: Data Types in JavaScript
// Category: JavaScript Fundamentals
// ============================================

// JavaScript has 7 primitive data types:
// string, number, boolean, null, undefined, bigint, symbol

// 1. STRING - text data
let name = "Ayushi";
let greeting = 'Hello World';
console.log(typeof name);        // output: string

// 2. NUMBER - integers and decimals both
let age = 21;
let price = 99.99;
console.log(typeof age);         // output: number

// 3. BOOLEAN - only true or false
let isLoggedIn = true;
let isAdmin = false;
console.log(typeof isLoggedIn);  // output: boolean

// 4. NULL - intentionally empty value
let user = null;
console.log(typeof user);        // output: object (known JS bug)

// 5. UNDEFINED - variable declared but no value assigned
let result;
console.log(typeof result);      // output: undefined

// 6. BIGINT - very large numbers beyond number limit
let bigNumber = 9999999999999999n;
console.log(typeof bigNumber);   // output: bigint

// 7. SYMBOL - unique identifier (advanced, used in objects)
let id = Symbol("id");
console.log(typeof id);          // output: symbol

// ============================================
// KEY DIFFERENCE: null vs undefined
// null     → developer intentionally set empty
// undefined → value was never assigned
// ============================================