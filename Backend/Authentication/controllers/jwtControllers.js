const jwt = require('jsonwebtoken')

const jwtRoot = (req,res)=>{
    res.status(200).json({
        message:"JWT API ROOT"
    })
}

const jwtSign = (req,res)=>{
    const {username} = req.body
    if(!username){
        return res.status(400).json({message: 'Username is required'})
    }
    const token = jwt.sign({username:username}, "secretkey")
    res.cookie("token", token, {httpOnly:true})
    res.status(200).json({message: 'Token generated and stored in cookie'})
}

const jwtLoginStatus = (req,res)=>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({message: 'Not Logged In'})
    }
    try{
        const decoded = jwt.verify(token, 'secretkey')
        res.status(200).json({
            message:'Logged In',
            user_details: decoded
        })
    }
    catch(err){
        res.status(401).json({message: 'Invalid Token'})
    }
}

module.exports = { jwtRoot, jwtSign, jwtLoginStatus }