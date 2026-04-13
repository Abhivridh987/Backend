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
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger/swagger')

const mongoose = require('mongoose')

// Access environment variables

require('dotenv').config()

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI
const JWT_SECRET = process.env.JWT_SECRET || '12345'

// Paths

const authRouterPath = path.join(__dirname, 'routes', 'authRoutes.js');
const bagRouterPath = path.join(__dirname, 'routes', 'bagRoutes.js')
const adminRouterPath = path.join(__dirname, 'routes', 'adminRoutes.js')
const orderRouterPath = path.join(__dirname, 'routes', 'orderRoutes.js')
// Middleware

const logData = (req,res, next)=>{
    console.log(`HTTPS Request: ${req.method} ${req.headers.host}${req.url}`);
    next();
}

const jwtAuthMiddleware = (req,res, next) =>{
    if(req.cookies && req.cookies.token)
    {
        const token = req.cookies.token;
        try{
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded;
            next();
        }catch(err)
        {
            console.log('Invalid JWT Token');
            res.status(401).json({
                message: 'Invalid JWT Token',
                status:401,
                ok:false
            })
        }
    }
    else{
        console.log('JWT Token is missing in the request');
        res.status(401).json({
            message: 'JWT Token is missing in the request',
            status:401,
            ok:false
        })
    }
}

const adminAuthMiddleware = (req,res,next)=>{

    if(req.cookies && req.cookies.token)
    {
        const decoded = jwt.verify(req.cookies.token, JWT_SECRET);
        if(decoded && decoded.admin)
            next();
        else{
            res.status(403).json({
                message:'Admin access required',
                status:403,
                ok:false,
                decodedToken:decoded
            })
        }
    }
    else{
        res.status(401).json({
            message:'JWT Token is missing in the request',
            status:401,
            ok:false
        })
    }
}

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(logData)

//Routers

const authRouter = require(authRouterPath);
const bagRouter = require(bagRouterPath)
const adminRouter = require(adminRouterPath)
const orderRouter = require(orderRouterPath)
// Routes

app.get('/', (req,res)=>{
    res.status(200).json({
        message: 'Server Root is Running'
    })
})

app.use('/auth', authRouter)

app.use('/home', jwtAuthMiddleware)
app.use('/home', bagRouter)

app.use('/admin', jwtAuthMiddleware)
app.use('/admin', adminAuthMiddleware)
app.use('/admin', adminRouter)

app.use('/orders', jwtAuthMiddleware)
app.use('/orders', orderRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

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
