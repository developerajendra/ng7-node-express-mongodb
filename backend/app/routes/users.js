const app = module.exports = require('express')()
const db = require('../middlewares/mongodb.middleware');

//Resgister 
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


//Login
app.post('/login',(req, res, next)=>{
    console.log(333);
    
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
