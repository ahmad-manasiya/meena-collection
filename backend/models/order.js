const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

productId:{

type:mongoose.Schema.Types.ObjectId,

ref:"Product"

},

quantity:Number,

customerName:String,

paymentMode:String,

status:{

type:String,

default:"Pending"

},

date:{

type:Date,

default:Date.now

}

});

module.exports =
mongoose.model("Order",OrderSchema);