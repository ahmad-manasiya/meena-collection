loginForm.onsubmit = async(e)=>{

e.preventDefault();

let data = {

email:e.target.email.value,

password:e.target.password.value

};


// LOGIN API

let res = await fetch(

"http://localhost:5000/user/login",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(data)

}

);


let result = await res.json();


// SUCCESS

if(result.success){

// SAVE USER SESSION

localStorage.setItem(

"user",

data.email

);

localStorage.setItem(

"role",

result.role

);


// ADMIN LOGIN

if(result.role==="admin"){

location="adminDashboard.html";

}

// CUSTOMER LOGIN

else{

location="product.html";

}

}

else{

alert("Wrong Email Password");

}

};