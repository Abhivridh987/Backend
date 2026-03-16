const bcrypt = require('bcrypt')
const saltRounds = 10

const bcryptRoot = async (req,res)=>{
    res.status(200).json(
        {
            message: 'Bcrypt API Root'
        }
)}

const bcryptSign = async (req, res) => {
    const {username, password} = req.body
    if(!username || !password){
        return res.status(400).json({message: 'Username and password are required'})
    }
    bcrypt.hash(password, saltRounds, function(err, hash) {
        res.cookie("username", username, {httpOnly:true})
        res.cookie("password", hash, {httpOnly:true})
        res.status(200).json({message:'User saved succesfully'})
    });
}

const bcryptLogin = async (req,res)=>{
    const {username, password} = req.body
    if(!username || !password){
        return res.status(400).json({message: 'Username and password are required'})
    }
    const storedUsername = req.cookies.username
    bcrypt.compare(password, req.cookies.password, function(err, result){
        if(result && username === storedUsername)
        {
            res.json({message: 'Login successful'})
        }
        else{
            res.status(401).json({message: 'Invalid credentials'})
        }
    })

}

module.exports = {
    bcryptRoot, 
    bcryptSign, 
    bcryptLogin
}

