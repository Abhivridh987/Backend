const express = require('express')

const app = express()

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

/*
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store'); // Disable cache
  next();
});
*/

app.get('/',(req,res)=>{
    console.log(`Http request : ${req.method} ${req.headers.host}${req.url}`)
    res.statusCode =200
    res.send('Hello, Welcome to Home Page')
})

app.get('/about',(req,res)=>{
    console.log(`Http request : ${req.method} ${req.headers.host}${req.url}`)
    res.status(200)
    res.send('Hello, Welcome to About Page')
})
app.all('*',(req,res)=>{
    console.log(`Http request : ${req.method} ${req.headers.host}${req.url}`)
    res.statusCode = 404
    res.send(`OOps!,Other Page ${res.statusCode}`)
})

app.listen(5000,()=>{
    console.log('Server listening on port 5000');
})