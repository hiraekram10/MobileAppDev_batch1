// let fruits = ["apple","mango","bnana","orange"]
// fruits.splice(1,2,"strawberry")

// let a = fruits.slice(1,4)

// function add( a,b){
// console.log(a+b);

// }

// add(5,10)


// 
// unknown ==> fat arrow function
//  ()=>{
//     alert('hello user')
// }

//  function expression 
// let greet = ()=>{
//     alert('hello user')
// }
// greet()

// normal function
// function greet (){
//     console.log('hello user');
    
// }

// greet ()



//  let greet = (a)=>{
//     alert(`hello user ${a}`)
// }
// greet("sana")


// Object


// syntax
// let car = {

//     // key : value,     ---> property
//     color : "red",
//     doors : 2,
//     isActive :true,
// }

// console.log(car); // {color: 'red', doors: 2, isActive: true}

// console.log(car.doors); //2
// console.log(car.color); //red
// console.log(isActive); //Error : isActive is not defined


// let car = {
//     color : "red",
//     doors : 2,
//     isActive :true,
// }


// let student = {
//     name: 'hira',
//     rollNo:"7863hfdg",
//     contact:'032784623',
//     subjects:['english',"urdu","maths"]
// }

// console.log(typeof student);  //object
// console.log(typeof student.contact);
// console.log(typeof student.subjects); //object



// let student = {
//     name: 'hira',
//     rollNo:"7863hfdg",
//     contact:'032784623',
//     subjects:['english',"urdu","maths"]
// }

// // update
// student.contact = "0379897845"
// console.log(typeof student.contact);


// 2 method  convert string into number
// parseInt(), parseFloat()


// student.contact = parseFloat(student.contact)
// console.log(typeof student.contact);


// console.log(parseInt('abc')); //Nan --> not a number
// console.log(parseInt('34345'));

let student = {
    name: 'hira',
    rollNo:"7863hfdg",
    contact:'032784623',
    subjects:['english',"urdu","maths"]
}


let student1 = {
    name: 'sana',
    rollNo:"783h90",
    contact:'032343453',
    subjects:['english',"urdu","maths"]
}
let student2 = {
    name: 'iqra',
    rollNo:"8f570",
    contact:'0343645543',
    subjects:['english',"urdu","maths"]
}


// object in array is called -----> ARRAY OF OBJECT
// let stuData = [student,student1,student2]

// console.log(stuData);
// console.log(stuData[0].name,  stuData[1].name   , stuData[2].name);


// for(var i = 0; i< stuData.length;i++){
//     console.log(stuData[i].name);
    
// }


// Es6---> Ecma script 
// Advance method of an array

// let stuData = [student,student1,student2]
// stuData.forEach((value,index)=>{
//  console.log(value.name);
 
// })


// agr kisi function ko kisi or function main bnaen tou wo ek callback function bnjata hai





















































// console.log(student.subjects[2]);



















