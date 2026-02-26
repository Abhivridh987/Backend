const express = require('express')
const path = require('path')
const fs = require('fs')
const session = require('express-session')
const mongoose = require('mongoose')
const app = express()

const PORT = 5000
// Paths
const routerPathDB = path.join(__dirname, 'routes', 'product_routes.js')

//Middleware
const logData = (req,res, next)=>{
    const curr_path = `HTTPS Request : ${req.method} ${req.headers.host}${req.url}`
    console.log(curr_path)
    next()
}

const router = require(routerPathDB)

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/', logData)
app.use('/api/db', router)

//Routes
app.get('/',(req,res)=>{
    res.status(200).json({
        status:200,
        result:"Root"
    })
})

app.all("*", (req,res)=>{
    res.status(400).json({
        status:400,
        result:"Invalid Path"
    })
})

mongoose.connect("mongodb+srv://abhivridh2_db_user:lIIrUa1UaCzpCR2W@products.i86qziq.mongodb.net/Products?appName=Products")
.then(() => {
  console.log("MongoDB connected successfully");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => {
  console.error(err);
});


// lIIrUa1UaCzpCR2W