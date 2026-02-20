// BANNER SLIDER

let banners=[

"banner1.jpg",

"banner2.jpg",

"banner3.jpg"

];

let i=0;

setInterval(()=>{

i++;

if(i>=banners.length)

i=0;

banner.src=banners[i];

},3000);



// LOAD PRODUCTS

fetch(

"http://localhost:5000/product/all"

)

.then(r=>r.json())

.then(data=>{

products.innerHTML="";


data.slice(0,8)

.forEach(p=>{

products.innerHTML+=`

<div class="card"

onclick="location='productDetail.html?id=${p._id}'">

<img src=

"http://localhost:5000/uploads/${p.image}"

>

<h4>${p.name}</h4>

<p>

₹ ${p.price}

</p>

</div>

`;

});

});



// CATEGORY REDIRECT

function goCategory(cat){

location=

"product.html?category="+cat;

}