const path = require('path');
const fs = require('fs');

let path1 = path.resolve(__dirname,"files","Readfiles","file1.txt");
let path2 = path.resolve(__dirname,"files","Readfiles","file2.txt");
let path3 = path.resolve(__dirname,"files","Writefiles","write-async.txt");

// readFile(path, char_encoding, callback_func)
/*
let fileprocess_append = ()=>{
    console.log("File Process Started")
    fs.readFile(path1,'utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const first = result;
        fs.readFile(path2,'utf8',(err,result)=>{
            if(err){
                console.log(err)
                return;
            }
            const second = result
            fs.writeFile(path3,`${first}\n${second}`,{flag:'a'},(err,result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result)
                console.log("Done the file Processing");
            })
        })
    })
    console.log("Next Process Started")
}
    */

let fileprocess_read =(path)=>{
    return new Promise((resolve,reject)=>{
        let data=""
        fs.readFile(path,'utf8',(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            resolve(result);
        })
        

    })
}
let fileprocess_write = (path,mess)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(path,mess,{flag:'w'},(err,res)=>{
            if(err){
                console.log("Error")
                return
            }
            console.log("Data written succesfully")
            resolve("Data written Succesfully");
        })
    })
}

let fileprocess = async (path1,path2,path3)=>{
    let file1 = await fileprocess_read(path1);
    let file2 = await fileprocess_read(path2)
    let mess = file1 + file2;
    let file3 = await fileprocess_write(path3,mess)
}

console.log("Task Started")
let x = fileprocess(path1,path2,path3);
x.then((res)=>{
    console.log(res)
    console.log("File Process Completed Succesfully")
})
console.log("Next Task");