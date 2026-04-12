const mongoose = require('mongoose');

const BagSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "Bag Name is Required"],
            trim:true,
        },
        brand:{
            type:String,
            required:[true, "Bag Brand is Required"],
            trim:true,
        },
        model_no:{
            type:Number,
            required:[true, "Bag Model Number is Required"],
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
        price:{
            type:Number,
            required:[true, "Bag Price is Required"],
        },
        discount:{
            type:Number,
            default:0,
            min:0,
            max:100
        },
        rating:{
            type:Number,
            default:0,
            min:0,
            max:5
        },
        image_url:{
            type:String,
            default:"",
            trim:true,
        },
        quantity:{
            type:Number,
            required:[true, "Bag Quantity is Required"],
            min:0
        },
        bestSeller:{
            type:Boolean,
            default:false
        }
        
    },
    {
        timestamps:true
    }
)

const Bag = mongoose.model("Bag", BagSchema, "Bag");
module.exports = Bag;
