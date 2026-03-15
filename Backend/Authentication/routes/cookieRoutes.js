const express = require('express')
const path = require('path')
const fs = require('fs')

const router = express.Router()

//Paths

//Routes

router.get('/', (req,res)=>{
    res.status(200).json({message: 'Cookie API Root'})
})
router.get('/setcookie',(req,res)=>{
    res.cookie("username", "Abhivridh", {httpOnly:true})
    res.status(200).json({message: 'Cookie has been set'})
})

router.get('/getcookie', (req,res)=>{
    res.status(200).json({cookies:req.cookies})
})

module.exports = router