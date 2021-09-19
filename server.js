const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./server/routes/api');
const port = 3000;
const app = express();
var request = require('request');
var cors = require('cors'); app.use(cors());
app.use(express.static(path.join(__dirname,'build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api',api);
app.get("/searchMovies", function(req,res){
    request("localhost:3000/trending",function(error,response,body){
         if(!error && response.statusCode==200){
            
            res.send(body);
         }  
    })
})
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'build/index.html'));
});
app.listen(port,function(){
    console.log("Server running on localhost:"+port);
})
