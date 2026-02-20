const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();


// MIDDLEWARE

app.use(cors());

app.use(express.json());


// IMAGE ACCESS

app.use(

"/uploads",

express.static("uploads"));


// DATABASE CONNECT

mongoose.connect(

"mongodb://127.0.0.1:27017/cosmetic"

)

.then(()=>{

console.log("Database Connected");

})

.catch(err=>{

console.log(err);

});


// ROUTES

const productRoute =

require("./routes/ProductRoute");

app.use("/product",productRoute);


const orderRoute =

require("./routes/orderRoute");

app.use("/order",orderRoute);

const userRoute =
require("./routes/userRoute");

app.use("/user",userRoute);


// TEST ROUTE

app.get("/",(req,res)=>{

res.send("Cosmetic Server Running");

});


// SERVER START LAST

app.listen(5000,()=>{

console.log("Server Running 5000");

});