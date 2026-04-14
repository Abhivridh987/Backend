const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const fs = require('fs');
const PORT = 3000;

//Paths
const publicPath = path.join(__dirname, 'public');
const homePath = path.join(__dirname,'public', 'interface.html');
const signUpPath = path.join(__dirname,'public','signup.html');
const signupSuccessPath = path.join(__dirname,'public','usersignupsuccess.html');
const signupErrorPath = path.join(__dirname,'public','useralreadypresent.html');
const invalidPath = path.join(__dirname,'public','invalidlogin.html');
const calcPath = path.join(__dirname, 'public', 'calculator.html');
const dataPath = path.join(__dirname, 'data', 'data.json');
const aboutPath = path.join(__dirname,'public','about.html')
const contactPath = path.join(__dirname,'public','contact.html');

// Session Middleware
app.use(session({
    secret : 'Abhivridh@123',
    resave:false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60, // 1 hour
        httpOnly : true
    }
}));

function Authentication(req,res,next){
    if(req.session && req.session.UserID && req.session.UserExists){
        return next();
    }
    else{
        console.log('User Not Logged In');
        res.redirect('/');
    }
}

// Data




app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(publicPath));


//GET Methods
app.get('/', (req, res) => {
    console.log(`HTTP Request: ${req.method} ${req.headers.host}${req.url}`);
    res.status(200).sendFile(homePath);
});
app.get('/about',(req,res)=>{
    console.log(`HTTP Request: ${req.method} ${req.headers.host}${req.url}`);
    res.status(200).sendFile(aboutPath);
})
app.get('/contact',(req,res)=>{
    console.log(`HTTP Request: ${req.method} ${req.headers.host}${req.url}`);
    res.status(200).sendFile(contactPath);   
})
app.get('/signup',(req,res)=>{
    console.log(`HTTP Request: ${req.method} ${req.headers.host}${req.url}`);
    res.status(200).sendFile(signUpPath);
})
app.get('/signup/success',(req,res)=>{
    console.log(`HTTP Request: ${req.method} ${req.headers.host}${req.url}`);
    res.status(200).sendFile(signupSuccessPath);
})
app.get('/signup/error',(req,res)=>{
    console.log(`HTTP Request: ${req.method} ${req.headers.host}${req.url}`);
    res.status(200).sendFile(signupErrorPath);
})
app.get('/login/invalid',(req,res)=>{
    console.log(`HTTP Request: ${req.method} ${req.headers.host}${req.url}`);
    res.status(200).sendFile(invalidPath);
})
app.get('/calculator/user', Authentication,(req, res) => {
    console.log(`HTTP Request: ${req.method} ${req.headers.host}${req.url}`);
    if(req.session && req.session.UserID && req.session.UserExists){
        console.log(`HTTP Request: ${req.method} ${req.headers.host}${req.url}`);
        res.status(200).sendFile(calcPath);
    }
    else{
        console.log(`HTTP Request: ${req.method} ${req.headers.host}${req.url}`);
        console.log('User not logged in');
        res.redirect('/');
    }
});

app.get('/calculator/user/api',Authentication,(req,res)=>{

    console.log(`HTTP Request: ${req.method} ${req.headers.host}${req.url}`);
    res.status(200).json({
        exists:req.session.UserExists,
        id:req.session.UserID,
        username:req.session.UserNAME,
    })
})

app.get('/calculator/user/history/filter',Authentication,(req,res)=>{
    console.log(`HTTP Request : ${req.method} ${req.headers.host}${req.url}`);
    const filter = req.query.filter;
    const date = req.query.date;
    const history = req.session.UserHistory;
    console.log(`Filter: ${filter}`);
    console.log(history);
    if(filter){
        if(filter == 'Today'){
            res.status(200).json(history[0]);
        }
        else if(filter == 'Yesterday'){
            res.status(200).json(history[1]);
        }
        else if(filter == 'This Week'){
            res.status(200).json(history.slice(0,7));
        }
        else if(filter == 'This Month'){
            let date = new Date();
            let month = date.getMonth() + 1 ;
            let m = String(month).padStart(2,'0');
            console.log(m);
            const filteredHistory = history.filter((item) => {
                const date = item.date;
                const itemMonth = date.split('-')[1];
                return itemMonth === m;
            }
            );
            console.log(filteredHistory);
            res.status(200).json(filteredHistory);
        }
    }
    if(date){
        console.log(date)
        const filteredHistory = history.filter((item)=>{
            return item.date == date;
        })
        res.status(200).json(filteredHistory);
    }
})

app.get('/calculator/user/logout',Authentication,(req,res)=>{

    console.log(`HTTP Request: ${req.method} ${req.headers.host}${req.url}`);
    req.session.destroy((err)=>{
        if(err){
            console.log('Error in Destroying Session');
            res.status(500).send('Error in Logging Out');
        }
        res.clearCookie('connect.sid');
        console.log('User Logged Out Successfully');
        res.redirect('/');
    })
})
app.get('/user/details',(req,res)=>{
    console.log(`HTTP Request: ${req.method} ${req.headers.host}${req.url}`);
    const data = {
        username:req.session.UserNAME,
        userid:String(req.session.UserID)
    }
    res.status(200).json(data);
})
//POST Method
app.post('/login',(req, res) => {
    console.log(`HTTP Request: ${req.method} ${req.headers.host}${req.url}`);
    const {email,password} = req.body;
    console.log(req.body);
    console.log(`Email: ${email}, Password: ${password}`);
    const logininfostr = fs.readFileSync(dataPath,"utf8");
    const logininfo = JSON.parse(logininfostr);
    const user = logininfo.find(user => user.email === email && user.password === password);
    
    
    if(user){
        console.log('Login Successfull');
        function todaydate_updation_on_file(){
        console.log('Current Date Checking')
        let today_date = new Date();

        // Extract parts
        let day = String(today_date.getDate()).padStart(2, '0');
        let month = String(today_date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        let year = today_date.getFullYear();

        // Combine
        let formattedDate = `${day}-${month}-${year}`;
        console.log(formattedDate); 
        if(user.history[0].date != formattedDate){
            let item = {
                date:formattedDate,
                operations:[]
            }
            console.log('Date Updation Started')
            user.history.splice(0,0,item);
            let index = logininfo.findIndex(u => u.id === user.id);
            logininfo.splice(index,1,user);
            const new_logininfo = JSON.stringify(logininfo);
            fs.writeFileSync(dataPath,new_logininfo,{flag:'w'});
            console.log('Date Wriiten in File')
        }
    };

    todaydate_updation_on_file(user);
    console.log(user);
        req.session.UserID = user.id;
        req.session.UserNAME = user.username;
        req.session.UserHistory = user.history;
        req.session.UserExists = user.exists;
        console.log(`User ID: ${req.session.UserID}, User Name: ${req.session.UserNAME}`);
        res.status(200).send({exists:true});
    }
    else{
        console.log('Login Failed');
        res.status(200).json({exists:false});
    }
})

app.put('/signup',(req,res)=>{
    console.log(`HTTP Request : ${req.method} ${req.headers.host}${req.url}`);
    const {username,email,password} = req.body;
    console.log(username,email,password);
    const db_str = fs.readFileSync(dataPath,"utf8");
    const db = JSON.parse(db_str);
    const verify = db.find((user) => user.email === email)
    console.log(verify);
    if(verify){
        res.status(200).json({"success" : false,"error":"User Already Present"})
    }
    else{
        let today_date = new Date();

        // Extract parts
        let day = String(today_date.getDate()).padStart(2, '0');
        let month = String(today_date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        let year = today_date.getFullYear();

        // Combine
        let formattedDate = `${day}-${month}-${year}`;
        console.log(formattedDate);
        const index = db.length;
        const new_user = {
            "id":index+1,
            "username":username,
            "email":email,
            "password":password,
            "history":[{"date":formattedDate,"operations":[]}],
            "exists":true
        }
        db.push(new_user);
        console.log('New User Created');
        console.log(new_user);
        const new_db_str = JSON.stringify(db);
        fs.writeFile(dataPath,new_db_str,{flag:'w'},(err,result)=>{
        if(err){
            console.log('New User Failed to Put in DB')
            res.status(500).json({"error" : err,"success" : false})
        }
        else{
            console.log('New User Updated in DB');
            res.status(200).json({"success" : true})
        }
    });
    }
})

app.put('/calculator/user/history/put',Authentication,(req,res)=>{
    console.log(`HTTP Request : ${req.method} ${req.headers.host}${req.url}`);
    const {new_op} = req.body;
    console.log(new_op);
    const db_str = fs.readFileSync(dataPath,"utf8");
    const db = JSON.parse(db_str);
    let index = db.findIndex(u => u.id === req.session.UserID);
    db[index].history[0].operations.push(new_op);
    req.session.UserHistory = db[index].history;
    const new_db_str = JSON.stringify(db);
    fs.writeFile(dataPath,new_db_str,{flag:'w'},(err,result)=>{
        if(err){
            res.status(500).json({"error" : err,"success" : false})
        }
        else{
            res.status(200).json({"success" : true})
        }
    });
    

})

app.put('/calculator/user/changeusername',Authentication,(req,res)=>{
    console.log(`HTTP Request : ${req.method} ${req.headers.host}${req.url}`);
    const {new_name} = req.body;
    const db_str = fs.readFileSync(dataPath,"utf8");
    const db = JSON.parse(db_str);
    let index = db.findIndex(u => u.id === req.session.UserID);
    req.session.UserNAME = new_name;
    db[index].username = req.session.UserNAME; 
    const new_db_str = JSON.stringify(db);
    fs.writeFile(dataPath,new_db_str,{flag:'w'},(err,result)=>{
        if(err){
            res.status(400).json({"error" : err,"success" : false})
        }
        else{
            res.status(200).json({"success" : true})
        }
    });

})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});