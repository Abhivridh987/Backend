const express = require('express')
const app = express()
const morgan = require('morgan')

let d1 = new Date()
console.log(d1)


const loginfo1 = (req,res,next)=>{
    console.log(`1. HTTP Request : ${req.headers.host}${req.url}`)
    next()
}
const confirm1 = (req,res,next) =>{
    console.log('1. Page reached')
    next()
}
const loginfo2 = (req,res,next)=>{
    console.log(`2. HTTP Request : ${req.headers.host}${req.url}`)
    next()
}
const confirm2 = (req,res,next) =>{
    console.log('2. Page reached')
    next()
}
const loginfo3 = (req,res,next)=>{
    console.log(`3. HTTP Request : ${req.headers.host}${req.url}`)
    next()
}
const confirm3 = (req,res,next) =>{
    console.log('3. Page reached')
    next()
}


// req => middleware => res
app.use(morgan('tiny'))
app.use([loginfo1,confirm1])
app.use('/about',[loginfo3,confirm3])

app.get('/',[loginfo2, confirm2],(req,res)=>{
    console.log('Welcome')
    res.send('Home Page')
    console.log('\n')
})
app.get('/info',(req,res)=>{
    console.log('welcome')
    res.send('Info Page')
    console.log('\n')
})
app.get('/about',(req,res)=>{
    
    console.log('About Page')
    res.send('About Page')
    console.log('Welcome')
    console.log('\n')
})
app.get('/about/contact',(req,res)=>{
    res.send('Contact Page')
    console.log('\n')
})
app.all('*',(req,res)=>{
    res.send('OOps, Other Page')
    console.log('\n')
})

app.listen(5000,()=>{
    console.log('Website activated at port 5000');
})