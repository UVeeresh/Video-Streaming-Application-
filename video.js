const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const videoSchema= new Schema({
    Movie_name: String,
    Movie_url: String,
    Movie_desc: String 
});
module.exports = mongoose.model('video',videoSchema,'trending') 