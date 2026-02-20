// GET ID FROM URL

let id =

new URLSearchParams(

window.location.search

)

.get("id");


let product;


// LOAD PRODUCT

fetch(

"http://localhost:5000/product/all"

)

.then(r=>r.json())

.then(data=>{


product =

data.find(

x=>x._id==id

);


show();

});



function show(){

mainImage.src=

"http://localhost:5000/uploads/"+

product.image;

name.innerText=

product.name;

price.innerText=

"₹ "+product.price;

stock.innerText=

"Stock : "+product.stock;

}



// ADD CART

function addCart(){

let cart =

JSON.parse(

localStorage.getItem("cart")

)||[];

cart.push(product._id);

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

alert("Added To Cart");

}



// BUY

async function buyNow(){

let name=

prompt("Your Name");

if(!name)return;


await fetch(

"http://localhost:5000/order/place",

{

method:"POST",

headers:{

"Content-Type":

"application/json"

},

body:JSON.stringify({

productId:product._id,

quantity:1,

customerName:name,

paymentMode:"COD"

})

}

);

alert("Order Done");

}

// ZOOM EFFECT

mainImage.onmousemove=(e)=>{

zoomLens.style.display="block";

let rect=

mainImage.getBoundingClientRect();

let x=

e.clientX-rect.left-60;

let y=

e.clientY-rect.top-60;

zoomLens.style.left=x+"px";

zoomLens.style.top=y+"px";

};


mainImage.onmouseleave=()=>{

zoomLens.style.display="none";

};