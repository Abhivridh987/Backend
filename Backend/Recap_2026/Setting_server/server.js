const express = require('express')
const app = express()
const session = require('express-session')
const os = require('os')
const path = require('path')
const fs = require('fs')

const PORT = 3000

//Paths
dataPath = path.join(__dirname, 'database', 'student.json')
dataAPIPath = path.join(__dirname, 'routes', 'db_api.js')

//Modules

const router = require(dataAPIPath)

//Middleware

const logData = (req,res,next)=>{
    console.log(`HTTP Request : ${req.method} ${req.headers.host}${req.url}`)
    next();
}
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/', logData)
app.use('/api/db', router)

//Routes

app.get('/', (req,res)=>{
    console.log(`HTTP Request : ${req.method} ${req.headers.host}${req.url}`);
    const curr_path = `HTTP Request : ${req.method} ${req.headers.host}${req.url}`;
    res.status(200).json({
        "location":"root",
        "path":curr_path,
        "status":200,
    })    
})

app.all('*',(req,res)=>{
    const curr_path = `HTTPS Request : ${req.method} ${req.headers.host}/api/db${req.url}`;
    res.status(400).json({
        "path":curr_path,
        "status":400,
        "error":"Invalid Path",
        "console_err":"Invalid Path"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port : ${PORT}`)
})