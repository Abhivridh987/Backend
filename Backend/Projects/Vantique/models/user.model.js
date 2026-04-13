const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        username:{
            type:String, 
            required:[true, "Username Required"],
            trim:true
        },
        email:{
            type:String,
            required:[true, "Email Required"],
            unique:[true, "Email must be unique"],
            trim:true
        },
        password:{
            type:String,
            required:[true, "Password Required"],
            trim:true
        },
        admin:{
            type:Boolean,
            default:false
        },
        cart:[
            {
                bagId:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'Bag'
                },
                quantity:{
                    type:Number,
                    default:1
                }
            }
        ]
    },
    {
        timestamps:true
    }
)

const User = mongoose.model("User", UserSchema, "User");
module.exports = User