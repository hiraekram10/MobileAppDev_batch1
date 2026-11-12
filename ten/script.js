// console.log(document);


// let obj = {
// name:'yasgdjh',
// rollNo:8973482
// }


// obj.rollNo


// let document={
//  getElementById :'WERT'
//  ADD
// }


// let btn = document.getElementById('myButton') 
// let newbtn = document.getElementById('newBtn') 
// let num = document.getElementById('myNum')
// let myNum = 0;
// const myFunct = ()=>{
  
// num.innerText = myNum
// myNum++
// newbtn.disabled = false
  
// }
// btn.addEventListener('dblclick',myFunct)




// newbtn.addEventListener('click',()=>{
//    num.innerText = myNum
  

//  if(myNum == 0){
// myNum = 0
// newbtn.disabled = true
//  }else{
    
   
//  myNum--

//  }
// })


// Document object model 

// Api (application programming interface)  endpoint


// https//:google.com/posts
// api ----> work like a waiter


    // Request Methods (Verbs): Common actions include 
    // GET (retrieve data),
    //  POST (submit new data),
    //  PUT / PATCH (update data), 
    // and DELETE (remove data).


    // TO asynchronous programming USE PROMISES  ALT (async await)
    // fetch() ----> promise based api for making http requests
  let main = document.getElementById('main')
  let newbtn = document.getElementById('newBtn') 

  const myFunction =async ()=>{
    let res =await fetch('https://fakestoreapi.com/products')
    let readbleFormat =await res.json()
    readbleFormat.forEach(element => {
     main.innerHTML += `
     <img src=''/>
     <h1>${element.title}</h1>`

    
        
    });
    
    
  }

 



  newbtn.addEventListener('click',myFunction)

 





