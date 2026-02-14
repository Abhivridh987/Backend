const http = require('http');

const server = http.createServer((req,res)=>{
    const URL = req.url
    if(req.url === '/'){
        res.statusCode = 200;
        res.write(`Welcome to Home Page\n`)
        console.log(`Url : ${req.headers.host}${URL}`)
        res.end(` End of Page `)

    }
    else if(req.url === '/about'){
        res.statusCode = 200;
        res.write(`Welcome to About Page\n`)
        console.log(`Url : ${req.headers.host}${URL}`)
        res.end(` End of Page`)
    }
    else{
        res.statusCode = 404;
        res.statusMessage = "Server Error"
        res.write(`<h1>Page Not Found</h1><h3><a href="/">Back to Home Page</a></h3>`)
        console.log(`Url : ${req.headers.host}${URL}`)    
        res.end(`Error ${res.statusCode} : ${res.statusMessage}`);
    }

})

port =3000;
server.listen(port,()=>{
    console.log(`Website connected to port ${port}`)

})