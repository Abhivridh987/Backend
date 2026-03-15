const os  = require('os')
const path = require('path')
const fs = require('fs')

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

const app = express()
//Paths

const cookieRoutePath = path.join(__dirname, 'routes', 'cookieRoutes.js')
const bcryptRoutePath = path.join(__dirname, 'routes', 'bcryptRoutes.js')

//Middleware

const logData = (req,res,next) => {
    console.log(`HTTPS Request: ${req.method} ${req.headers.host}${req.url}`);
    next();
}


app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser()) 

// Routes

const cookieRoutes = require(cookieRoutePath)
const bcryptRoutes = require(bcryptRoutePath)

app.use('/', logData)
app.use('/cookie', cookieRoutes)
app.use('/bcrypt', bcryptRoutes)


app.get('/', (req,res)=>{
    res.send('Authentication Server is Running')
})



app.listen(5000, ()=>{
    console.log('Authentication server is running on port 5000');
})
