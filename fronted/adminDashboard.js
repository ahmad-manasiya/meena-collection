// ADD PRODUCT

productForm.onsubmit = async(e)=>{

e.preventDefault();

let formData =

new FormData(e.target);

await fetch(

"http://localhost:5000/product/add",

{

method:"POST",

body:formData

}

);

alert("Product Added 😄");

location.reload();

};




// LOAD ORDERS

fetch(

"http://localhost:5000/order/all"

)

.then(r=>r.json())

.then(data=>{

orders.innerHTML="";


data.forEach(o=>{

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

Customer :

${o.customerName}

</p>


<p>

Payment :

${o.paymentMode}

</p>


<select onchange=

"updateStatus(

'${o._id}',

this.value

)">

<option>

${o.status}

</option>

<option>

Pending

</option>

<option>

Packed

</option>

<option>

Shipped

</option>

<option>

Delivered

</option>

</select>

</div>

</div>

`;

});

});




// UPDATE STATUS

async function updateStatus(id,status){

await fetch(

"http://localhost:5000/order/status/"+id,

{

method:"PUT",

headers:{

"Content-Type":

"application/json"

},

body:JSON.stringify({

status

})

}

);

alert("Status Updated");

}