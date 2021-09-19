const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');
const User = require('../models/User');
const db = "mongodb+srv://vish_mlab19:1904@cluster0.ubm2i.mongodb.net/OnlineStreaming?retryWrites=true&w=majority"//"mongodb+srv://vish_mlab19:1904@cluster0.ubm2i.mongodb.net/OnlineStreaming?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser',true);
const bodyParser=require('body-parser');
const { default: userEvent } = require('@testing-library/user-event');
mongoose.connect(db,//function(err){
    //if(err){
    //    console.error("Error!" + err);
    //}
//}
{ useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open',function(){
    console.log("MongoDb database connection established succesfully");
})





router.get('/trending',function(req,res){ 
   //      res.send('api works');
   console.log("Get request for all videos");
   Video.find({})//function(err,trending){
   // if(err){
   //     console.log("Error retrieving videos");          
//}else{
//    res.json(trending);
//}
     .exec(function(err,trending){
      if(err){
           console.log("Error retrieving videos");          
       }else{
           console.log("Hello");
           res.json(trending);
       }
    });
});
router.get('/trending/:Movie_name',function(req,res){ 
    //      res.send('api works');
    console.log("Get request for single video");
    Video.find({Movie_name:req.params.Movie_name})//function(err,trending){
    // if(err){
    //     console.log("Error retrieving videos");          
 //}else{
 //    res.json(trending);
 //}
      .exec(function(err,trending){
       if(err){
            console.log("Error retrieving video");          
        }else{
            console.log("Hello");
            res.json(trending);        
            
        }
     });
 });
 
 router.post('/userinfo',function(req,res){
     console.log('Post UserInfo');
     var newUser = new User();
     newUser.username = req.body.username;
     newUser.password = req.body.password;
     newUser.save(function(err,insertedUser){

               if(err){
                   console.log('Error in saving User');
               }else{
                   res.json(insertedUser);
               }
     });

 });

module.exports = router;
