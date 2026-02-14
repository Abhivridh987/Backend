const http = require('http')
const worker = require('worker_threads')


const server = http.createServer((req,res)=>{
    const URL = req.url;
    if(URL == '/'){
        res.write(`<h1>Home Page</h1>`);
        console.log(`Host Address : ${req.headers.host}${URL}`)
        res.write(`<h1>Host Address : ${req.headers.host}${URL}</h1>`)
        res.end('<h1>End Of Home Page</h1>')
    }
    else if(URL == '/task'){
        res.write(`<h1>Task Page</h1>`);
        console.log(`Host Address : ${req.headers.host}${URL}`)
        res.write(`<h1>Host Address : ${req.headers.host}${URL}</h1>`)
        
        const worker1 = new worker.Worker("C:/Users/Abhivridh/Desktop/html_fourth_phase/Nodejs/#6EventLoops_and_applications/heavy.js",{
            workerData : {outer : 100000,inner : 10000}
        });

        worker1.on('message',(msg)=>{
            res.end(`<h1>${msg}</h1><h1>Page Task End</h1>`)
        })

        worker1.on('error',(err)=>{
            console.log(err);
            res.statusCode = 404;
            res.end(`<h1>File Not Found / Internal Server Error: ${res.statusCode}</h1>`);
        })

        worker1.on('exit',(code)=>{
            console.log(`Worker exited with code : ${code}`)
        })

        

        
    }
    else{
        res.write('<h1>OOps! Entered the wrong Page')
        res.statusCode = 404
        res.statusMessage = 'Error Found'
        //console.log(`Error Code : ${res.statusCode}<br>Error message : ${res.statusMessage}`)
        res.end(`<h1>Error Code : ${res.statusCode}<br>Error message : ${res.statusMessage}</h1>`)
   }
})
port = 5000
server.listen(port,()=>{
    console.log(`Server Started at Port : ${port}`)
})
