const express = require("express");

const router = express.Router();

const Order = require("../models/order");



// ⭐ PLACE ORDER

router.post("/place", async (req,res)=>{

try{

const order = new Order(req.body);

await order.save();

res.json({

message:"Order Placed"

});

}

catch(err){

res.status(500)

.json(err);

}

});




// ⭐ GET ALL ORDERS

router.get("/all", async(req,res)=>{

const data =

await Order.find()

.sort({_id:-1});

res.json(data);

});




// ⭐ UPDATE STATUS

router.put("/status/:id",

async(req,res)=>{

await Order.findByIdAndUpdate(

req.params.id,

{

status:req.body.status

}

);

res.json({

message:"Status Updated"

});

});



module.exports = router;