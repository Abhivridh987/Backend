const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    orders:[
        {
            bagId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Bag",
                required:true
            },
            quantity:{
                type:Number,
                required:true
            }
        }
    ],
    status:{
        type:String,
        default:"ORDER_PLACED"
    }
}, {
    timestamps:true
})

const Order = mongoose.model("Order", OrderSchema, "Order")
module.exports = Order