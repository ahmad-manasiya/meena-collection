signupForm.onsubmit = async(e)=>{

e.preventDefault();

let data = {

name:e.target.name.value,

email:e.target.email.value,

password:e.target.password.value

};


// SIGNUP API

let res = await fetch(

"http://localhost:5000/user/signup",

{

method:"POST",

headers:{

"Content-Type":

"application/json"

},

body:JSON.stringify(data)

}

);


let result = await res.json();


// SUCCESS

if(result.success){

alert("Account Created 😄");

location="login.html";

}

else{

alert("Signup Error");

}

};