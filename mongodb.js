var mongodb = require('mongodb');
var mongoose = require('mongoose');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost/OnlineStreaming'
mongoose.set('useNewUrl':'true')
mongoose.connect(url,function(err,db){
      
     if(err){
         console.log(err);
     }else{
         console.log('Connected to',url)
         db.close();
     }
});