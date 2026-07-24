//songleton:

//object literals:

const mysym = Symbol("Key1");

const juser ={
    [mysym] : "mykey1",
    name:"Ayushi",
    age : 18,
    location : "Lucknow",
    "full name":"Ayushi Patel",
    email: "jhalak@.in"
}
console.log(juser.age);
console.log(juser["name"]);
console.log(juser["full name"]);
console.log(typeof juser[mysym]);

juser.email ="chatgpt@.com";
// Object.freeze(juser);
juser.email ="chatgpt@google.com";
console.log(juser);

juser.greeting = function(){
    console.log(`Hello JS User ,${this.name}`);
}
console.log(juser.greeting());

// const tinderUser = new Object(); // singleton obj
const tinderUser = {};//non singleton

tinderUser.id = "1234@abc";
tinderUser.name = "Sam";
tinderUser.isloggedIn = false;

console.log(tinderUser);

const regularUser = {
    emial: "sam@gmail.com",
    fullname:{
        userfullname:{
            firstname:"ayushi",
            lastname: "patel"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);


















