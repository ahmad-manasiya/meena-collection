// UPDATE STATUS

router.put("/status/:id",

async(req,res)=>{

await Order.findByIdAndUpdate(

req.params.id,

{

status:req.body.status

}

);

res.send("Updated");

});