// ============================================
// Topic: Conditionals in JavaScript
// Category: JavaScript Fundamentals
// ============================================

// CONDITIONALS: Used to make decisions in code
// Types: if/else, else if, ternary operator, switch

// ============================================
// 1. IF / ELSE
// ============================================

let age = 18;

if (age >= 18) {
    console.log("You are an adult");  // runs if condition is true
} else {
    console.log("You are a minor");   // runs if condition is false
}

// ============================================
// 2. ELSE IF - multiple conditions
// ============================================

let marks = 75;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");          // this will run
} else if (marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// ============================================
// 3. TERNARY OPERATOR - shorthand if/else
// Syntax: condition ? valueIfTrue : valueIfFalse
// ============================================

let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please login";
console.log(message);                 // output: Welcome back!

// ============================================
// 4. SWITCH STATEMENT - multiple exact matches
// ============================================

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of work week"); // this will run
        break;                             // break stops further checking
    case "Friday":
        console.log("End of work week");
        break;
    case "Sunday":
        console.log("Holiday!");
        break;
    default:
        console.log("Midweek day");        // runs if no case matches
}

// ============================================
// KEY POINTS:
// == checks value only (loose equality)
// === checks value AND type (strict equality) ← always use this
// Example: 0 == false → true (BAD)
//          0 === false → false (CORRECT)
// ============================================