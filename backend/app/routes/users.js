const app = module.exports = require('express')()
const db = require('../middlewares/mongodb.middleware');

//Resgister 
app.post('/register',(req, res, next)=>{
    let {email, password, repeatPassword} = req.body;
    let _userCollection = db.collection('user');

    let data = {
        'email':email,
        'password': password,
        'repeatPassword': repeatPassword,
    }

    validateUser(_userCollection, email, (userAlreadyExist = false)=>{
        if(userAlreadyExist){
            res.send({errorMessage:"User already exist."}); 
        }else{
            _userCollection.insertOne(data,(error, collection)=>{
                if(error) throw error;
                console.log("record inserted successfully");
            });
            res.send(req.body);
            next();
        }
    });
});

/**
 * Validating the user while creating the new user
 * @param {*} userCollection 
 * @param {*} email 
 * @param {*} callBack 
 */
let validateUser = (userCollection, email , callBack)=>{
   userCollection.find({email}).toArray((error, result)=>{
       if(result && result.length){
           callBack(true)
        }else{
            callBack(false)
        }
    });    
};


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
