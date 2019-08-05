const express = require("express");

let bodyParser = require('body-parser');
const mongoose = require('mongoose');

/**
 * Connection to database
 */
mongoose.connect('mongodb://localhost:27017/user_details');
var db = mongoose.connection;
db.on('error',console.log.bind(console,'connection error'));
db.once('open', (callback)=>{
    console.log("mongo db is connected....");
});


const app = express();
 
app.get('/',(req,res)=>{
    res.send('hello world');
});

//Applying middleware
app.use((req,res, next)=> {
    res.header("Access-Control-Allow-Origin", 'http://localhost:4200');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//Resgister 
app.use(bodyParser.json());
app.post('/register',(req, res, next)=>{
    let {email, password, repeatPassword} = req.body;

    let data = {
        'email':email,
        'password': password,
        'repeatPassword': repeatPassword,
    }

    db.collection('user').insertOne(data,(error, collection)=>{
        if(error) throw error;
        console.log("record inserted successfully");
    });

    res.send(req.body);
    next();
});


//Login post
app.post('/login',(req, res, next)=>{
     let {email, password} = req.body;
     db.collection('user').findOne({email, password},(error, result)=>{
        if(error)throw error;

        if(result){
            res.send({success:true});
            // res.redirect('/');
        }else{
            res.send({errorMessage:"User doesn't matched."}); 
        }
     })
});


app.get('*', function(req, res, next) {
    let err = new Error(`${req.ip} tried to reach ${req.originalUrl}`); // Tells us which IP tried to reach a particular URL
    err.statusCode = 404;
    err.shouldRedirect = true; //New property on err so that our middleware will redirect
    res.send({errorMessage:"User doesn't matched."}); 
    next(err);
  });

//Server
app.listen(4000,()=>{
    console.log('server is running....');
});


