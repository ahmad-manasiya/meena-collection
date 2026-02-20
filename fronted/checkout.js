// ⭐ GET DATA

let buyNow =

JSON.parse(

localStorage.getItem("buyNow")

);

let cart =

JSON.parse(

localStorage.getItem("cart")

)||[];

let products=[];


// ⭐ LOAD PRODUCTS

fetch(

"http://localhost:5000/product/all"

)

.then(r=>r.json())

.then(data=>{

products=data;

calculate();

});




// ⭐ CALCULATE TOTAL

function calculate(){

let totalPrice=0;

let itemCount=0;


// BUY NOW PRODUCT

if(buyNow){

let p=

products.find(

x=>x._id==buyNow.productId

);

if(p){

totalPrice+=p.price;

itemCount=1;

}

}


// CART PRODUCTS

else{

cart.forEach(id=>{

let p=

products.find(

x=>x._id==id

);

if(p){

totalPrice+=p.price;

itemCount++;

}

});

}


count.innerText=itemCount;

total.innerText=totalPrice;

}




// ⭐ PLACE ORDER

async function placeOrder(){


// LOGIN CHECK

let user=

localStorage.getItem("user");

if(!user){

alert("Login Required 😄");

location.href="login.html";

return;

}


// ADDRESS CHECK

let username=name.value;

let address=addr.value;


if(!username || !address){

alert("Fill Address");

return;

}


// PAYMENT MODE

let payment=

document.querySelector(

"input[name='pay']:checked"

).value;



// ⭐ BUY NOW ORDER

if(buyNow){

await fetch(

"http://localhost:5000/order/place",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

productId:buyNow.productId,

quantity:1,

customerName:username,

paymentMode:payment

})

}

);

localStorage.removeItem("buyNow");

}


// ⭐ CART ORDER

else{

for(let id of cart){

await fetch(

"http://localhost:5000/order/place",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

productId:id,

quantity:1,

customerName:username,

paymentMode:payment

})

}

);

}

localStorage.removeItem("cart");

}


// ⭐ PAYMENT MESSAGE

if(payment==="UPI"){

alert("UPI Payment Success 😄");

}

else{

alert("Cash On Delivery");

}


alert("Order Successful 🎉");

location.href="success.html";

}