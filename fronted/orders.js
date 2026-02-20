// LOAD ORDERS

fetch(

"http://localhost:5000/order/all"

)

.then(r=>r.json())

.then(data=>{

orders.innerHTML="";


data.forEach(o=>{


let statusClass =

o.status.toLowerCase();


orders.innerHTML+=`

<div class="card">

<img src=

"http://localhost:5000/uploads/${o.productId.image}"

>


<div>

<h3>

${o.productId.name}

</h3>


<p>

₹ ${o.productId.price}

</p>


<p>

Payment :

${o.paymentMode}

</p>


<p class="status ${statusClass}">

Status :

${o.status}

</p>

</div>

</div>

`;

});

});