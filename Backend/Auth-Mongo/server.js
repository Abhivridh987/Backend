// Importing dependencies

const path = require('path')
const fs = require('fs')
const express = require('express')
const cors = require('cors')
// const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()

// Access environment variables

require('dotenv').config()

const PORT = process.env.PORT || 3000

// Paths


// Middleware

const logData = (req,res, next)=>{
    console.log(`HTTPS Request: ${req.method} ${req.headers.host}${req.url}`);
    next();
}

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(logData)

// Routes

app.get('/', (req,res)=>{
    res.status(200).json({
        message: 'Server Root is Running'
    })
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})