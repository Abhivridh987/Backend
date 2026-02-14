const path = require('path')
const express = require('express')
const {info} = require('../#10APIs_and_Json/data.js')
const app = express()


//paths
const public_path= path.resolve(__dirname,'public')
const html_path = path.resolve(__dirname,'public','form.html')


// Middleware
const logdata = (req,res,next)=>{
    console.log(`HTTP Request :${req.method}  ${req.headers.host}${req.url}`)
    next()
}  // To show login info


// Using Middleware
app.use(logdata);
app.use(express.static(public_path))
app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(html_path)
})

app.get('/data',(req,res)=>{
    res.status(200).json(info)
})


// if using traditional method using forms, use urlencoded() to parse it into string
app.post('/login',(req,res)=>{
    console.log(req.body)
    const {name , age, education} = req.body
    console.log('Name : ',name)
    console.log('Age : ', age)
    console.log('Education : ', education)
    res.json({
        name : name,
        age: age,
        educ : education
    });
    
})


// if use modern method using js, express.json() should be included in middleware and this code will work
app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    if(!name){
        res.status(404).json({success : false, data : name})
    }
    else{
    res.status(200).send({success : true, data : name})
    }
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>OOps ! Landed on Other Page</h1>')
})

app.listen(5000,()=>{
    console.log('Website activated at Port 5000')
})



/*
<form id="loginForm">
  <input type="text" name="username" />
  <input type="password" name="password" />
  <input type="submit" />
</form>

<script>
  document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // prevent page reload

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.text();
    console.log(result);
  });
</script>

app.use(express.json()); // Note: different from urlencoded

app.post('/login', (req, res) => {
  console.log(req.body); // handles JSON data
  res.send('AJAX form submitted!');
});

*/