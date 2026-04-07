const mongoose = require('mongoose');

const BagSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "Bag Name is Required"],
            trim:true,
        },
        description:{
            type:String,
            required:[true, "Bag Description is Required"],
            trim:true,
        },
        category:{
            type:String,
            required:[true, "Bag Category is Required"],
            trim:true,
        },
        brand:{
            type:String,
            required:[true, "Bag Brand is Required"],
            trim:true,
        },
        price:{
            type:Number,
            required:[true, "Bag Price is Required"],
        },
        discount:{
            type:Number,
            required:[true, "Bag Discount is Required"]
        },
        rating:{
            type:Number,
            required:[true, "Bag Rating is Required"],
            min:0,
            max:5
        },
        image_url:{
            type:String,
            trim:true,
        },
        quantity:{
            type:Number,
            required:[true, "Bag Quantity is Required"],
            min:0
        }
        
    },
    {
        timestamps:true
    }
)

const Bag = mongoose.model("Bag", BagSchema, "Bag");
module.exports = Bag;
