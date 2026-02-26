const fs = require('fs')
const path = require('path')
const os = require('os')

const viewDB = (req,res)=>{
    const curr_path = `HTTPS Request : ${req.method} ${req.headers.host}/api/db${req.url}`;
    
    try{
        const data_str = fs.readFileSync(dataPath, "utf8")
        const data = JSON.parse(data_str)
        res.status(200).json({
        "path":curr_path,
        "status":200,
        "result":data
    })
    }catch(err)
    {
        console.log(err)
        res.status(500).json({
            "path":curr_path,
            "status":500,
            "error":"Error in Accessing DB",
            "console_err":err
        })
    }
    
}

const filtererrorDB =  (req,res)=>{
    const curr_path = `HTTPS Request : ${req.method} ${req.headers.host}/api/db${req.url}`;
    res.status(400).json({
        "path":curr_path,
        "status":400,
        "error":"No filters",
        "console_err":"Error in giving filters"
    })
}

const filterDB = (req,res)=>{
    const curr_path = `HTTPS Request : ${req.method} ${req.headers.host}/api/db${req.url}`;

    const {id} = req.params;
    const ID = Number(id);
    
    if(Number.isNaN(ID))
    {
        console.log('ID should be a number');
        res.status(500).json({
            "path":curr_path,
            "status":500,
            "error":"ID should be a number",
            "console_err":"Error in giving filters"
        }) 
        return;
    }
    let data;
    try{
        const data_str = fs.readFileSync(dataPath, "utf8")
        data = JSON.parse(data_str)
    }catch(err)
    {
        console.log(err)
        res.json(500).json({
            "path":curr_path,
            "status":500,
            "error":"Error in Accessing DB",
            "console_err":err
        })
        return;
    }
    data = data.filter(student => student.id === ID)
    res.status(200).json({
        "path":curr_path,
        "status":200,
        "result":data
    })
    return;
}

const insertDB = (req,res)=>{
    const curr_path = `HTTPS Request : ${req.method} ${req.headers.host}/api/db${req.url}`;
    const {name, DOB, email, password} = req.body;
    if(!name || !DOB || !email || !password)
    {
        console.log('Enter correct Student Details')
        res.status(500).json({
            "path":curr_path, 
            "status":500,
            "error":"Error in Giving Data",
            "console_err":"Enter valid details"
        })
        return ;
    }
    let data;
    try{
        const data_str = fs.readFileSync(dataPath, "utf8")
        data = JSON.parse(data_str)
    }catch(err)
    {
        console.log(err)
        res.status(500).json({
            "path":curr_path, 
            "status":500,
            "error":"Error in Accessing Data",
            "console_err":err
        })
        return ;
    }
    USER = data.find((user)=>user.email === email)
    if(USER)
    {
        res.status(500).json({
            "path":curr_path, 
            "status":500,
            "error":"Redundant Data",
            "console_err":"Data Already Exists"
        })
        return ;
    }

    const newId = data.length > 0 
    ? Math.max(...data.map(s => s.id)) + 1 
    : 1;

    data.push({
        "id":newId,
        "name":name,
        "DOB":DOB,
        "email":email,
        "password":password
    })
    const updated_data = JSON.stringify(data);
    fs.writeFile(dataPath, updated_data, {flag:'w'}, (err,result)=>{
        if(err)
        {
            console.log(err)
            res.status(500).json({
                "path":curr_path, 
                "status":500,
                "error":"Error in Writing Data",
                "console_err":err
            })
        }
        else{
            console.log(result)
            res.status(200).json({
                "path":curr_path, 
                "status":200,
                "result":JSON.parse(updated_data)
            })
        }
    })

}

const deleteDB = (req,res)=>{
    const curr_path = `HTTPS Request : ${req.method} ${req.headers.host}/api/db${req.url}`;

    if (Object.keys(req.body).length > 1)
    {
        console.log('Invalid Request Body')
        res.status(500).json({
            path:curr_path,
            status:500,
            error:"Too Many Parameters"
        })
        return;
    }
    const {id}  = req.body;
    if(!id)
    {
        console.log('Invalid Request Body')
        res.status(500).json({
            path:curr_path,
            status:500,
            error:"Error in request body"
        })
        return;
    }

    let data;

    try{
        const data_str = fs.readFileSync(dataPath, "utf8")
        data = JSON.parse(data_str)
    }catch(err){
        console.log(err)
        res.status(500).json({
            path:curr_path,
            status:500,
            error:"Error in reading file",
            console_err: {err}
        })
        return;
    }
    data = data.filter((student)=>student.id !== id)
    const updated_data = JSON.stringify(data)
    fs.writeFile(dataPath, updated_data, {flag:'w'}, (err, result)=>{
        if(err)
        {
            console.log(err)
            res.status(500).json({
                path:curr_path,
                status:500,
                error:"Error in writing the data",
                console_err: {err}
            })
        }
        else{
            res.status(200).json({
                path:curr_path,
                status:200,
                result:data
            })
        }
    })

}

const updateDB = (req,res)=>{
    const curr_path = `HTTPS Request : ${req.method} ${req.headers.host}/api/db${req.url}`;

    if(Object.keys(req.body).length < 1 || Object.keys(req.body).length > 4){
        console.log('Invalid Request Body')
        res.status(500).json({
            path:curr_path,
            status:500,
            error:"Either No Request Body or Too Much Parameters"
        })
        return;
    }
    if(!req.body.id)
    {
        console.log('Invalid Request Body')
        res.status(500).json({
            path:curr_path,
            status:500,
            error:"No ID of student"
        })
        return;
    }
    else if((!req.body.name && !req.body.email && !req.body.password && !req.body.DOB))
    {
        console.log('Invalid Request Body')
        res.status(500).json({
            path:curr_path,
            status:500,
            error:"Give atleast email or password or DOB to update"
        })
        return;
    }

    let data;
    try{
        const data_str = fs.readFileSync(dataPath, "utf8")
        data = JSON.parse(data_str)
    }catch(err){
        console.log(err)
        res.status(500).json({
            path:curr_path,
            status:500,
            error:"Error in reading file",
            console_err: {err}
        })
        return;
    }

    data = data.map((student)=>{
        if(student.id == req.body.id)
        {
            if(req.body.name)
            {
                student.name = req.body.name;
            }
            if(req.body.DOB)
            {
                student.DOB = req.body.DOB;
            }
            if(req.body.email)
            {
                student.email = req.body.email;
            }
            if(req.body.password)
            {
                student.password = req.body.password;;
            }
        }
        return student;
    })
    const updated_data = JSON.stringify(data)
    fs.writeFile(dataPath, updated_data, {flag:'w'}, (err, result)=>{
        if(err)
        {
            console.log(err)
            res.status(500).json({
                path:curr_path,
                status:500,
                error:"Error in writing the data",
                console_err: {err}
            })
        }
        else{
            res.status(200).json({
                path:curr_path,
                status:200,
                result:data
            })
        }
    })
}

module.exports = {viewDB, filtererrorDB, filterDB, insertDB, deleteDB, updateDB}
