let allProducts = [];


// ⭐ LOAD PRODUCTS

fetch("http://localhost:5000/product/all")

.then(res=>res.json())

.then(data=>{

allProducts = data;

showProducts(data);

});




// ⭐ SHOW PRODUCTS

function showProducts(data){

products.innerHTML="";

data.forEach(p=>{

products.innerHTML+=`

<div class="card">

<div class="badge">

Beauty Deal

</div>

<img src="http://localhost:5000/uploads/${p.image}"

onclick="location='productDetail.html?id=${p._id}'"

>

<h4>${p.name}</h4>

<p class="price">

₹ ${p.price}

</p>

<p>

⭐ ${p.rating || 4.5}

</p>

<button onclick="addWish('${p._id}')">

❤️

</button>

<button onclick="addCart('${p._id}')">

Add Cart

</button>

<button onclick="buy('${p._id}')">

Buy Now

</button>

</div>

`;

});

}



// ⭐ SEARCH

search.oninput=(e)=>{

let keyword=e.target.value.toLowerCase();

let result=

allProducts.filter(p=>

p.name.toLowerCase()

.includes(keyword)

);

showProducts(result);

};




// ⭐ CATEGORY FILTER

function catFilter(cat){

if(!cat)

return showProducts(allProducts);

let f=

allProducts.filter(

p=>p.category===cat

);

showProducts(f);

}




// ⭐ FILTER SYSTEM

function applyFilter(){

let priceF=price.value;

let ratingF=rating.value;

let stockF=stock.value;


let filtered=

allProducts.filter(p=>{


if(priceF && p.price>priceF)

return false;


if(ratingF &&

(p.rating||4)<ratingF)

return false;


if(stockF==="yes"

&& p.stock<=0)

return false;

return true;

});

showProducts(filtered);

}




// ⭐ QUICK VIEW POPUP

function popup(id){

let p=

allProducts.find(

x=>x._id==id

);

popupContent.innerHTML=`

<h2>${p.name}</h2>

<img src=

"http://localhost:5000/uploads/${p.image}"

width=250>

<p>

Price ₹ ${p.price}

</p>

<p>

Stock :

${p.stock}

</p>

<button onclick="closePopup()">

Close

</button>

`;

popup.style.display="block";

}


function closePopup(){

popup.style.display="none";

}




// ⭐ ADD CART

function addCart(id){

let cart=

JSON.parse(

localStorage.getItem("cart")

)||[];

cart.push(id);

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

alert("Added To Cart 🛒");

}




// ⭐ BUY NOW (LOGIN REQUIRED)

async function buy(id){

// LOGIN CHECK

let user = localStorage.getItem("user");

if(!user){

alert("Login Required 😄");

location.href="login.html";

return;

}


// SAVE BUY PRODUCT

localStorage.setItem(

"buyNow",

JSON.stringify({
productId:id,
quantity:1

})

);


// GO CHECKOUT

location.href="checkout.html";

}


// GO CHECKOUT

location.href="checkout.html";




// ⭐ USER NAME SHOW

let u=

localStorage.getItem("user");

if(u){

username.innerText="👤 "+u;

}




// ⭐ WISHLIST

function addWish(id){

let wish=

JSON.parse(

localStorage.getItem("wish")

)||[];


// duplicate stop

if(wish.includes(id)){

alert("Already Wishlist");

return;

}

wish.push(id);

localStorage.setItem(

"wish",

JSON.stringify(wish)

);

alert("Added Wishlist ❤️");

}