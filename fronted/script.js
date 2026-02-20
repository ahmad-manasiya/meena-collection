const productBox =
document.getElementById
("products");

fetch(
"http://localhost:5000/product/all")

.then(res=>res.json())

.then(data=>{

productBox.innerHTML="";

data.forEach(p=>{

productBox.innerHTML+=`

<div class="card">

<h3>${p.name}</h3>

<img src=
"http://localhost:5000/uploads/${p.image}">

<p>₹ ${p.price}</p>

<button onclick=
"addCart('${p._id}')">

Add Cart

</button>

</div>

`;

});

});

function addCart(id){

let cart=
JSON.parse(

localStorage.getItem("cart")

)||[];

cart.push(id);

localStorage.setItem
("cart",

JSON.stringify(cart));

alert("Added");

}