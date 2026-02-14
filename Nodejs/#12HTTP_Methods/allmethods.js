const path = require('path')
const express = require('express')
const app = express()

// Paths 
const html_path = path.resolve(__dirname,'public','form.html')
const public_path = path.resolve(__dirname,'public')
const data_path = path.resolve(path.dirname(__dirname),'#10APIs_and_Json','data.js')
const login_path = './routes.js'

// Modules
const { info } = require(data_path);
const router = require(login_path)

//Middlewares
app.use(express.static(public_path))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/login',router);


app.get('/',(req,res)=>{
    console.log(`HTTP Request : ${req.method} ${req.headers.host}${req.url}`)
    res.status(200).sendFile(html_path)
})

app.get('/info',(req,res)=>{
    console.log(`HTTP Request : ${req.method} ${req.headers.host}${req.url}`)
    res.status(200).json(info);
})
app.get('/info/:ID',(req,res)=>{
    console.log(`HTTP Request : ${req.method} ${req.headers.host}${req.url}`)
    const {ID} = req.params;
    const selected_info = info.filter((inf)=>{
        if(inf.id == Number(ID)){
            return true;
        }
    })

    if(selected_info.length < 1){
        res.status(404).send('<h1>Id does not exist</h1>')
    }
    else{
        const selected_new_info = selected_info.map((inf)=>{
            const {id,name} = inf;
            return {id,name};
        })
        res.status(200).json(selected_new_info);
    }

})
app.get('/search',(req,res)=>{
    console.log(`HTTP Request : ${req.method} ${req.headers.host}${req.url}`)
    const { NAME } = req.query;
    console.log(NAME);
    const selected_info = info.filter((inf)=>{
        if(inf.name == NAME){
            return true;
        }
    })

    if(selected_info.length < 1){
        res.status(404).send('<h1>Id does not exist</h1>')
    }
    else{
        const selected_new_info = selected_info.map((inf)=>{
            const {id,name} = inf;
            return {id,name};
        })
        res.status(200).json(selected_new_info);
    }
})
/*
app.get('/login',(req,res)=>{
    res.status(200).json(info)
})
app.post('/login',(req,res)=>{
    const {name, age, education} = req.body;
    let length = info.length
    const user = {
        "id" : length+1,
        "name" : name,
        "age" : age,
        "education" : education
    }
    res.status(200).json(user);
})
app.put('/login/put',(req,res)=>{
    const {name, age, education} = req.body;
    const ID = info.length + 1
    const user = {
        "id" : ID,
        "name" : name,
        "age" : age,
        "education" : education
    }
    console.log(user);
    info.push(user)
    console.log(info);
    res.send('Hello')

})

app.delete('/login/delete',(req,res)=>{
    const {name, age, education} = req.body
    new_info = info.filter((inf)=> inf.name != name && inf.age != age && inf.education != education)
    console.log(new_info)
    res.send('From server : SuccesfulLY Deleted')
})
*/



app.all('*',(req,res)=>{
    res.status(404).send(`<h1>OOps ! Other Page Reached</h1>`)
})

app.listen(5000,()=>{
    console.log('Website listening to port 5000');
})
