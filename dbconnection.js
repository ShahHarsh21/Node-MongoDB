const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/CWHBlog";

mongoose.connect(url,{useNewUrlParser:true},function(err){
    if(err){
        console.log("Error is connecting database");
    }else{
        console.log("connected");
    }
});

module.exports = mongoose;