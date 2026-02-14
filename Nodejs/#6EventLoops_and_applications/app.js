const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('<h1>Home Page</h1>')
    }
    else if(req.url == '/about'){
        for(let i = 0; i<50; i++){
            for(let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end('<h1>About Page</h1>');
    }
    else{
        res.end('<h1>No Page Found</h1>')
    }

})

server.listen(5000,()=>{
    console.log('Server listening Port')
})
