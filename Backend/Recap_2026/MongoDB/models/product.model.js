const { uniqueId } = require('lodash')
const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {   
        name:{
            type:String,
            required:[true, "Name of Product Required"],
            trim:true
        },
        from:{
            type:String,
            required:false,
            trim:true
        },
        count:{
            type:Number,
            required:false,
            default:0
        },
        price:{
            type:Number,
            required:[true, 'Price Required']
        },
        company_id:{
            type:Number,
            required:[true, "Company ID Required"],
            unique:[true, "Unique ID required"]
        }
        
    },
    {
        timestamps:true
    }
)   

const productdemo = mongoose.model("productdemo", ProductSchema, "productdemo")
module.exports = productdemo