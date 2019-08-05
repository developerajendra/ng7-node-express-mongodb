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


module.exports = db;