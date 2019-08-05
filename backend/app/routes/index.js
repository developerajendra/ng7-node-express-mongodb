const app = module.exports = require('express')();

 //Default route
app.get('/',(req,res)=>{
    console.log(22222);
    
    res.send('hello world');
});
 

//User route
app.use(require('./users'));

 