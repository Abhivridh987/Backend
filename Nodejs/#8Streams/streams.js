const fs = require('fs')
// Writing in the file chunkwise
/*
function writedata(path,i){
    return new Promise((resolve,reject)=>{
        fs.writeFile(path,`Hello ${i} \n`,{flag:'a'},(err)=>{
            if(err){
                reject('Error')
                console.log(err)
                console.log(`Error Occurred`)
                return
            }
            else{
                resolve(`Data Written`)

            }
        })
    })
}
let i = 0,chunksize = 100; 
const writefile = async ()=>{
    end = i + chunksize;
    while(i<end && i < 1000){
        await writedata('./content.txt',i)
        i++
    }
    if(i<1000){
        console.log(`CHUNK ${i} completed`)
        setImmediate(writefile)
    }
    else{
        console.log('Data written 1000 times')
    }
}
writefile()
*/
// Writing Complete



// Read Stream
/*
const stream = fs.createReadStream('./content.txt',{highWaterMark :200 ,encoding : 'utf8'})

stream.on('open',()=>{
    console.log('File Opened')
})
stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>{
    console.log(err)
})
stream.on('end',()=>{

    console.log('End of File');
})

// Reading Complete
*/



const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        
        method = req.method
        let URL = req.url


        res.writeHead(200,{'content-type' : 'text/html'})
        console.log(`Home page\n`)
        res.write(`<h1>Home Page</h1>`)
        res.write(`HTTP Request : ${method} ${req.headers.host}${URL}`)
        const stream = fs.createReadStream('./content.txt',{highWaterMark:200,encoding:'utf8'})
        stream.on('open',()=>{
            res.write(`<p>Data File Opened</p>`)
            res.write(`<pre>`)
        })
        stream.on('data',(chunk)=>{
            
            res.write(chunk)
        })
        stream.on('error',(err)=>{
            res.end(err)
        })
        stream.on('end',()=>{
            res.write(`</pre>`)
            res.end(`<h1>End of Home Page</h1>`)
        })
        
    }
    else if(req.url === '/favicon.ico'){
        res.end();
    }
    else{
        console.log(`Other page \n`)
        res.end(`Sorry Wrong Page`);
    }
})



server.listen(3000,()=>{
    console.log(`Website started at port 3000`)
});
