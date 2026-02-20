let cart =

JSON.parse(

localStorage.getItem("cart")

)||[];

let products=[];


// LOAD PRODUCTS

fetch(

"http://localhost:5000/product/all"

)

.then(r=>r.json())

.then(data=>{

products=data;

render();

});




// SHOW CART

function render(){

cartItems.innerHTML="";

let totalPrice=0;


cart.forEach((id,index)=>{

let p=

products.find(

x=>x._id==id

);

if(!p)return;


totalPrice+=p.price;


cartItems.innerHTML+=`

<div class="card">

<img src=

"http://localhost:5000/uploads/${p.image}"

>

<div>

<h4>${p.name}</h4>

<p>

₹ ${p.price}

</p>


<button

class="remove"

onclick="removeItem(${index})">

Remove

</button>

</div>

</div>

`;

});


count.innerText=

cart.length;

total.innerText=

totalPrice;

}




// REMOVE ITEM

function removeItem(i){

cart.splice(i,1);

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

render();

}




// ⭐ CHECKOUT BUTTON

function checkout(){


// LOGIN CHECK

let user=

localStorage.getItem("user");

if(!user){

alert("Login Required 😄");

location.href="login.html";

return;

}


// CART EMPTY CHECK

if(cart.length===0){

alert("Cart Empty");

return;

}


// GO CHECKOUT

location.href="checkout.html";

}