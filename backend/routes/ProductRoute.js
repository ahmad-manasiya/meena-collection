const express = require("express");

const router = express.Router();

const multer = require("multer");

const Product =
require("../models/Product");


// IMAGE UPLOAD SETUP

const storage =
multer.diskStorage({

destination:"uploads",

filename:(req,file,cb)=>{

cb(

null,

Date.now()

+ "-"

+ file.originalname

);

}

});

const upload =
multer({storage});



// ADD PRODUCT

router.post(

"/add",

upload.single("image"),

async(req,res)=>{

try{

const product =
new Product({

name:req.body.name,

price:req.body.price,

stock:req.body.stock,

image:req.file.filename

});

await product.save();

res.send("Product Added");

}

catch(err){

console.log(err);

res.status(500)

.send("Error Adding Product");

}

});



// GET ALL PRODUCTS

router.get(

"/all",

async(req,res)=>{

try{

const data =

await Product.find();

res.json(data);

}

catch(err){

console.log(err);

res.status(500)

.send("Error");

}

});



module.exports = router;