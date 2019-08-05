const express = require("express");
const bodyParser = require('body-parser');
 

function run(){

    //Declaring the express
    const app = express();

     //Applying middleware
     app.use(bodyParser.json());
     app.use(require('./app/middlewares/cors.middleware'));
     
     
    //Routes
    app.use(require('./app/routes/index'));

   
    //Server
    app.listen(4000,()=>{
        console.log('server is running....');
    }); 

}

run();