const app = require('express')();

const cors = app.use((req,res, next)=> {
    console.log('11111');
    
    res.header("Access-Control-Allow-Origin", 'http://localhost:4200');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


module.exports = cors;