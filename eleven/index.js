// let main = document.getElementById('main')
//   let newbtn = document.getElementById('newBtn') 

//   const myFunction =async ()=>{
//     let res =await fetch('https://fakestoreapi.com/products')
//     let readbleFormat =await res.json()
//     readbleFormat.forEach(element => {
//      main.innerHTML += `
//      <img src=''/>
//      <h1>${element.title}</h1>`

    
        
//     });
    
    
//   }

 



//   newbtn.addEventListener('click',myFunction)



let box = document.getElementById('box1')
// console.log(box.innerText); // text 
// console.log(box.innerHTML);


const dataCall = async ()=>{
  let response =await fetch('https://fakestoreapi.com/products')
  let Mydata =await response.json()
 Mydata.forEach((e,i)=>{
console.log(e);
box.innerHTML += `<div class='card'>
<img src=${e.image} class='pic' />
<h1>${e.category}</h1>
<h2>${e.price}</h2> <p>${e.id}</p>
<button>add to cart </button>
</div>

`


 });

  
  
  
}

dataCall()

