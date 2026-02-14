const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.write(`Welcome to our Home Page\n${res.statusCode}\n${res.statusMessage}`)
    }
    else if(req.url === '/about' ){
        res.write(`Welcome to ABOUT Page\n${res.statusCode}\n${res.statusMessage}`)
    }
    else{s
        res.end(`<h1>OOps ! </h1> You have entered the wrond page <a href="/"><h3>Back to Home</h3></a>\n${res.statusCode}\n${res.statusMessage}`)
    }
    console.log('Website Accessed')
    console.log(res.statusMessage);
    res.end();
})

server.listen(5000)
