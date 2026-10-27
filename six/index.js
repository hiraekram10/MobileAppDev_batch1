//  functions

//function declare
// function sub ( ){
//    console.log(`gOOD MORNING hira`);  
// }


// sub()



// parameter a parameter is a named variable listed inside the parentheses of a function's definition.
// argument  , an argument is the actual value you pass into a function when you call





// function greet (userName){
//    console.log(`gOOD MORNING ${userName}`);  
// }


// greet('hira')

// greet('iqra')
// greet('ali')




// function div(a,b){
//   console.log(a/b);
// }


// // div(5,8)
// // div(10,5)
// div(18,8)



// 


// The return statement in JavaScript stops the execution of a function and specifies a value to be passed back to the function caller. If a function does not include an explicit return statement, or if the keyword is used without a value, it implicitly returns undefined

// function div(a,b){
// return 8 * b
// }

// console.log(div(10,2));


// function blockofcode  {  code }



// function div(a,b){
//     return b
//     }
    
// // console.log(div(10,14));


// let fucnReturn = div(10,15)
// alert(fucnReturn)



    // var, let , const 

    // ---->  var global scope 
    // -----> block scope


//     if(6<8){
//         console.log('hi');
//         var a = 10
//     }else{
//         console.log('hello');
//     }


// console.log(a); // 10


// for (var i= 3; i<7 ;i++){
//     console.log(i);
// }


// console.log(i);  //7


 // let and const -----> block scope
    // if(6<8){
    //     console.log('hi');
    //     let a = 10
    // }else{
    //     console.log('hello');
    // }


// console.log(a); error::: a is not defined


// for (let i= 3; i<7 ;i++){
//     console.log(i);
// }
// console.log(i);


    // if(6<8){
    //     console.log('hi');
    //     const a = 10
    // }else{
    //     console.log('hello');
    // }


//     for (const i= 3; i<7 ;i++){
//   console.log(i);  //3 ,,error Assignment to constant variale
// }
// console.log(i); 


    // console.log(a); is not defined

    // var actual
    // console.log(actual); //undefined


    // var , let , const functional scope
    // function add (){
    //    const hello = "hi users"
        
    // }

    // console.log(hello); // hello is not defined


// fat arrow function

    // let add = ()=>{

    // }



    // Introduced in ES6, a fat arrow function (or simply arrow function) is a compact alternative to a traditional JavaScript function expression.

// function sub (a){
//  return a
// }

//     let add = a => a


//    console.log(add(10)); 



// let fruits = ['apple','orange','bnana']
// console.log(fruits[2]);

// fruits[2] = 'pineapple' //updation
// console.log(fruits);


// let nums = [10,12 ,16 ,32,88,55] 
// for(var i = 0; i < nums.length;i++){

//    if(nums[i] %2 == 0){
//     console.log(`this number is even ${nums[i]}`);
//    }else{
//     console.log(`this number is odd ${nums[i]}`);
//    }

// }


// let num= [10]
// console.log(num.length); //1


// let num= []
// console.log(num);
// num[0] = 10

// console.log(num);
// num[1] =  "snaa"
// console.log(nu);
// console.log(num.length);


// Error handling
// try, catch


let num= [10]
console.log(num);


num[1] =  "snaa"

try{
    console.log(nu);
}catch(a){
    console.log(a);
}

console.log(num.length);


















