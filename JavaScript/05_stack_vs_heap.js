//primtive data types use the stack becuz they are call by value
let a = 10;
let b = a;
b = 20;
console.log(a,b);//if we change the value in primitive data type it will not change the original we in it stores it stack and stack gives the copy of the variables
//output - 10 , 20

//--------------------------------

//non primtive data types are call by reference and they use the heap becuz if we the change the one value in any object or array it will also change the whole original value

let obj1 ={val:10};
let obj2 = obj1;
obj2.val = 20 ;
console.log(obj1.val , obj2.val);//20,20

