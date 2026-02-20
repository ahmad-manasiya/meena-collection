let wish =

JSON.parse(

localStorage.getItem("wish")

)||[];

let products=[];


// LOAD PRODUCTS

fetch(

"http://localhost:5000/product/all"

)

.then(r=>r.json())

.then(data=>{

products=data;

show();

});



function show(){

wishDiv.innerHTML="";

wish.forEach((id,i)=>{


let p=

products.find(

x=>x._id==id

);

if(!p)return;


wish.innerHTML+=`

<div class="card">

<img src=

"http://localhost:5000/uploads/${p.image}"

>

<h4>${p.name}</h4>

<p>

₹ ${p.price}

</p>

<button

onclick="removeWish(${i})">

Remove

</button>

</div>

`;

});

}



function removeWish(i){

wish.splice(i,1);

localStorage.setItem(

"wish",

JSON.stringify(wish)

);

location.reload();

}