const express = require('express')
const {info} = require('./data.js')

const app = express()
app.get('/',(req,res)=>{
    console.log(`Data Page`)
    console.log(`Http Request : ${req.method} ${req.headers.host}${req.url}`)
    res.send('<h1>Home Page</h1>')    
})
app.get('/wholedata',(req,res)=>{
    console.log(`Data Page`)
    console.log(`Http Request : ${req.method} ${req.header.host}${req.url}`)
    res.json(info)
})

app.get('/persondata',(req,res)=>{
    console.log(`Other Page`)
    console.log(`Http Request : ${req.method} ${req.header.host}${req.url}`)
    const person_info = info.map((inf)=>{
        const {name,age} = inf
        return {name,age};
    }) 
    res.json(person_info);

})

app.get('/persondata/*',(req,res)=>{
    console.log(`Other Page`)
    console.log(`Http Request : ${req.method} ${req.headers.host}${req.url}`)
    let url = req.url
    firstSlash = url.indexOf('/');
    SecondSlash = url.indexOf('/', firstSlash + 1)
    let name = decodeURIComponent(url.slice(SecondSlash + 1));
    specific_info = info.filter((inf)=>{
        if(inf.name == name.trim()){
            const {id,name,age,education} = inf
            return {id,name,age,education}
        }
    })

    console.log(specific_info)
    if(specific_info){
        res.send(specific_info)
    }
    else{
        res.send('Data not Found')
    }
    

})

app.get('/idsearch/:Id',(req,res)=>{
    console.log(`Other Page`)
    console.log(`Http Request : ${req.method} ${req.headers.host}${req.url}`)
    const {Id} = req.params
    console.log(req.params)
    specific_info = info.find(inf => inf.id == Number(Id))
    if(specific_info){
        res.status(200).send(specific_info)
    }
    else{
        res.status(400).send('Data Unavailable')
    }    
})
app.get('/query',(req,res)=>{
    console.log(`Query Page`)
    console.log(`Http Request : ${req.method} ${req.headers.host}${req.url}`)
    const {ID,NAME} = req.query;
    console.log(ID,NAME)
    req_info = info.filter((inf)=>{
        if(inf.id == Number(ID)){
            return true;
        }
        if(inf.name == NAME){
            return true;
        }
    })
    if(req_info.length < 1){
        res.json({success : true, exists : false,data:[]})
    }
    else{
        const new_map = req_info.map((inf)=>{
            const {id,name} = inf
            return {id,name}
        })
        res.json(new_map)
    }
})

app.listen(5000,()=>{
    console.log('Website Activated at port 5000')

})