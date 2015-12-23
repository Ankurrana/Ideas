var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/MyIdeas';
mongoose.connect(url);
var db = mongoose.connection;
db.on('open',function(callback){console.log("Connected to Database server successfully!Yay");});
db.on('error',function(){console.log("Error Connecting to Database server!:(");})

var IdeaSchema = new mongoose.Schema({
  title  : { type : String, default : "My Awesome title", unique:true},
  desc : { type:String , default : "My Awesome description" },
  date : { type: Date , default : Date.now }
});

var Idea = mongoose.model('Idea', IdeaSchema);

module.exports = Idea;