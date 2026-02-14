const path = require('path')
public_path_htmlfile = path.resolve(__dirname,'public','qrcode.html')
static_resources_path = path.resolve(__dirname,'public')
const express = require('express')
const app = express()

app.use(express.static(static_resources_path))

app.get('/',(req,res)=>{
    console.log(`${req.method} ${req.headers.host}${req.url}`)
    res.status(200).sendFile(public_path_htmlfile)
})
app.get('/favicon.ico',(req,res)=>{
    res.send()
})
app.all('*',(req,res)=>{
    console.log(`${req.method} ${req.headers.host}${req.url}`)
    res.status(400).send('Reached Other Page')
})

app.listen(5000,()=>{
    console.log('Server Started at port 5000')
})