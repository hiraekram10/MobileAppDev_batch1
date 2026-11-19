// class User {
//   constructor(username, userAge){
//     this.name= username
//     this.age= userAge
//   }
// }

// let user1 = new User('hira',24)
// let user2= new User('sna')
// console.log(user2.name);
// console.log(user2);


// let obj = {
//     name:'hira',
//     fathername:'Ekram',
//     rollNo:73256,
//     myfunc : function(){
//         console.log(this); // return own object
        
//     }
// }


// let obj2 = {
//     name:'sana',
//     fathername:'naz',
//     rollNo:73256,
//     myfunc : function(){
//         console.log(this.name); // return own object
        
//     }
// }
// obj.myfunc()
// obj2.myfunc()



// this 


// In JavaScript, the this keyword refers to the object that is currently executing a piece of code
// • Standalone Functions. When a regular function is invoked on its own, this defaults to the global object (window in browsers). In strict mode ('use strict'), this becomes undefined.
// • Arrow Functions. Arrow functions do not create their own this binding. Instead, they inherit this from the surrounding lexical scope where they were defined.
// • Constructors and Classes. When a function or class is invoked with the new keyword, this refers to the newly created instance being constructed.
// • DOM Event Listeners. Inside a traditional event handler function, this refers to the HTML element that received the event.
// • Global Scope. Outside of any function or object, this refers to the global object (globalThis or window in a browser)


// class User {
//   constructor(username, userAge){
//     this.name= username
//     this.age= userAge
//   }
// }

// let user1 = new User('hira',24)
// let user2= new User('sna')
// console.log(user2.name);
// console.log(user2);

// _________________________________________________Abstraction
// class CoffeeMachine {
//   // Public interface exposed to the user
//   constructor(water,coffee){
//   this.water = water
//    this.coffee = coffee

//   }
//   makeCoffee() {
//     this.#boilWater();
//     this.#brewCoffee();
//     console.log("Coffee is ready!");
//   }

//   // Private implementation details hidden from outside access
//   #boilWater() {
//     console.log("Boiling water...");
//   }

//   #brewCoffee() {
//     console.log("Brewing coffee...");
//   }
// }

// const machine = new CoffeeMachine('1l','2spoons');
// machine.makeCoffee(); // Works: "Coffee is ready!"
// // machine.brewCoffee()  // function is not defined ---> bcz this methdod is private
// console.log(machine);



// class BankAcount {
//     #balance
// constructor(b){
//     this.#balance = b
// }
// IncAmount(){
//    console.log(this.#balance + 100);
    
// }
// }
// // console.log(undefined +100); //iski wajah say not a number


// const hiraAcount = new BankAcount(20)
// hiraAcount.IncAmount()
// console.log(hiraAcount);






















