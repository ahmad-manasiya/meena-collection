document.getElementById
("productForm")

.onsubmit=

async(e)=>{

e.preventDefault();

let formData=

new FormData

(e.target);

await fetch(

"http://localhost:5000/product/add",

{

method:"POST",

body:formData

});

alert("Product Added");

};