console.log("5" + 3);//53
console.log("5" - 3);//2
console.log("5" * "2");//10
console.log(1 + true);//2 //true->1 , false->0
console.log([]+[]);//empty string
console.log([] + {});//object object
console.log(0.1 + 0.2 === 0.3);//false
console.log(0.1+0.2);//0.300000000000004

// One Debug Quiz: 
let price = "100";
let discount = 20;
let final = price - discount;
console.log("final price: "+ final +" rupees"); //80
console.log(typeof final);