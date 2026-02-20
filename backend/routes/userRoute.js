const express = require("express");

const router = express.Router();

const User = require("../models/User");


// SIGNUP

router.post("/signup",

async(req,res)=>{

try{

const user = new User({

name:req.body.name,

email:req.body.email,

password:req.body.password

});

await user.save();

res.json({

success:true

});

}

catch(err){

console.log(err);

res.json({

success:false

});

}

});


// LOGIN

router.post("/login",

async(req,res)=>{

const user = await User.findOne({email:req.body.email,password:req.body.password});

if(user){

res.json({success:true,role:user.role});

}

else{

res.json({success:false});

}

});


// VERY IMPORTANT

module.exports = router;