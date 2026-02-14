const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/' ){
        res.end('<h1>Home Page</h1>')
    }
    else if(req.url === '/task'){
        res.write(`<h1>Task Started</h1>`)
        let i = 0,j=0,sum =0,outer = 50000,inner = 10000;
        let Chunk = 100;
        let task = () =>{
            let count = 0
            while(i<outer){
                if(j<inner){
                    sum+=i*j;
                    j++;
                    count++;
                }
                if(j>=inner){
                    j=0;
                    i++;
                }
                if(count>Chunk){
                    break;
                }

            }
            if(i >=outer){
                res.end(`<h1>Task Completed Sum = ${sum}</h1>`)
            }
            if(count>Chunk){
                count=0;
                setImmediate(task)
                return;
            }
            
        }
        task();
    }
    else{
        res.end(`<h1>Ooops!</h1>`)
    }
})

server.listen(5000,()=>{
    console.log('Server port Created 5000')
})