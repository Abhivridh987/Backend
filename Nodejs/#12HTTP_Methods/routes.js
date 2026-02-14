const express = require('express')
const path = require('path')
const router = express.Router()

const data_path = path.resolve(path.dirname(__dirname),'#10APIs_and_Json','data.js')
const { info } = require(data_path)

router.get('/',(req,res)=>{
    console.log(`HTTP Request : ${req.method} ${req.headers.host}${req.url}`)
    res.status(200).json(info)
})
router.post('/',(req,res)=>{
    console.log(`HTTP Request : ${req.method} ${req.headers.host}${req.url}`)
    const {name, age, education} = req.body;
    let length = info.length
    const user = {
        "id" : length+1,
        "name" : name,
        "age" : age,
        "education" : education
    }
    console.log(user);
    res.status(200).json(user);
})
router.put('/put',(req,res)=>{
    console.log(`HTTP Request : ${req.method} ${req.headers.host}${req.url}`)
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

router.delete('/delete',(req,res)=>{
    console.log(`HTTP Request : ${req.method} ${req.headers.host}${req.url}`)
    const {name, age, education} = req.body
    new_info = info.filter((inf)=> inf.name != name && inf.age != age && inf.education != education)
    console.log(new_info)
    res.send('From server : SuccesfulLY Deleted')
})

module.exports = router