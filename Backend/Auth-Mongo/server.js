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

const mongoose = require('mongoose')

// Access environment variables

require('dotenv').config()

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI

// Paths

const authRouterPath = path.join(__dirname, 'routes', 'authRoutes.js');


// Middleware

const logData = (req,res, next)=>{
    console.log(`HTTPS Request: ${req.method} ${req.headers.host}${req.url}`);
    next();
}

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(logData)

//Routers

const authRouter = require(authRouterPath);


// Routes

app.get('/', (req,res)=>{
    res.status(200).json({
        message: 'Server Root is Running'
    })
})

app.use('/auth', authRouter)



mongoose.connect(MONGO_URI)
.then(()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((err)=>{
    console.error('Error connecting to MongoDB:', err)
})
