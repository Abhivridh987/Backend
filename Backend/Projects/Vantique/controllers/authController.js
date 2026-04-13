const path = require('path')
const fs = require('fs')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// ENV

const JWT_SECRET = process.env.JWT_SECRET || '12345'
const saltRounds = parseInt(process.env.SALT_ROUNDS) || 15

// Models

const User = require('../models/user.model');
console.log("User:", User);
console.log("Type:", typeof User);

const authRoot = async (req ,res)=>{
    res.status(200).json({
        message: 'Auth API Root',
        status:200,
        ok:true
    })
}

const authLogin = async (req,res)=>{
    const {email, password} = req.body;

    if(!email || !password)
    {
        console.log('Email and Password are required for login')
        res.status(400).json({
            message: 'Email and Password are required for login',
            status:400,
            ok:false
        })
    }

    try{
        const user = await User.findOne({email:email})
        if(!user)
        {
            console.log('User has been not found in database');
            res.status(404).json({
                message: 'User not found in database',
                status:404,
                ok:false
            })
            return;
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch)
        {
            console.log('Invalid credentials');
            res.status(401).json({
                message: 'Invalid credentials',
                status:401,
                ok:false
            })
            return;
        }
        else{
            const token = jwt.sign({email: user.email, username: user.username, _id: user._id, admin:user.admin, cart:user.cart}, JWT_SECRET);
            res.cookie("token", token, {httpOnly:true});
            res.status(200).json({
                message: 'Login successful',
                status: 200,
                ok: true,
                token: token,
                token_decoded: jwt.decode(token, JWT_SECRET)
            });
        }
    } catch (error) {
        console.error('Error occurred during login:', error);
        res.status(500).json({
            message: 'Error occurred during login',
            status: 500,
            ok: false
        });
    }
}

const authSignup = async (req,res)=>{
    const {username, email, password} = req.body
    if(!username || !email || !password)
    {
        console.log('Username, Email, Password are required for signup');
        res.status(400).json({
            message:'Username, Email, Password are required for signup',
            status:400,
            ok:false
        })
        return;
    }
    const UserExists = await User.findOne({email:email})
    if(UserExists)
    {
        console.log('User with this email already exists');
        res.status(409).json({
            message: 'User with this email already exists',
            status:409,
            ok:false
        })
        return;
    }
    else{
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const newUser = new User({
            username:username,
            email:email,
            password:hashedPassword,
            admin:false,
            cart:[]
        })
        try{
            const savedUser = await newUser.save()
        } catch (error) {
            console.error('Error occurred while saving user:', error);
            res.status(500).json({
                message: 'Error occurred while saving user',
                status: 500,
                ok: false
            });
            return;
        }
        console.log('User signed Up succesfully')
        res.status(201).json({
            message:'User signed up successfully',
            status:201,
            ok:true,
            user:newUser
        })
    }
}

const authLogout = async (req,res) =>{
    res.clearCookie('token');
    res.status(200).json({
        message:"Logout Successfully",
        status:200,
        ok:true
    })
}



module.exports = {
    authRoot,
    authLogin,
    authSignup,
    authLogout
}