// LOGIN CHECK

let user =

localStorage.getItem("user");


// LOGIN REQUIRED

function checkLogin(){

if(!user){

alert("Login Required");

location="login.html";

}

}



// ADMIN SECURITY

function checkAdmin(){

let role =

localStorage.getItem("role");

if(role!=="admin"){

alert("Admin Only");

location="login.html";

}

}



// LOGOUT

function logout(){

localStorage.clear();

location="login.html";

}