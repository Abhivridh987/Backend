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
        }
    },
    {
        timestamps:true
    }
)

const User = mongoose.model("User", UserSchema, "User");
module.exports = User