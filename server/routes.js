
var express = require('./web-server.js').express;
var path = require('./web-server.js').path;
var bodyParser = require('./web-server.js').bodyParser;


module.exports = function(app){
	var Idea = require('./database.js');
	app.get('/idea/:title',function(req,res){
	  res.sendFile(path.resolve('./../app/idea.html'))
	})	
	app.use(express.static('./../app'));

	
	app.get('/api/ideas',function(req,res){
	 	var allideas = Idea.find({},'title desc -_id',function(err,data){
	    if(err) console.log("Error in getting all ideas from the server.!");
	    else res.send(data);
	  	});
	})

	app.delete('/api/idea/:title',function(req,res){
		Idea.remove({title:req.params.title},function(err){
			if(err){
				res.send("Could not Delete!")
			}else{
				res.send('Successfully Deleted!');
			}
		})
	})	

	app.get('/api/idea/:title',function(req,res){
	  console.log("API called!");	
	  Idea.findOne({
	    title : req.params.title
	  },'title desc date',function(err,data){
	  	// console.log(err);
	  	if(err){
	  		console.log("Error eXISTS!");
	  		res.status(400);
	  		res.json({
	  			msg : "Doesn't exist!"
	  		});
	  	}else{
	    	if(data != null ) 
	    		res.json(data);
	    	else
	    		res.json({title:'No Records Exist',desc:"No records Exist"});
	  	}
	  })
	})



	app.post('/api/idea',function(req,res){
	 
	  var newidea = new Idea({
	    title : req.body.title,
	    desc : req.body.desc
	  },function(err,data){
	    if(err) 
	    	res.send(err);
	  });

	  newidea.save(function(err){
	  	if(err){
	  		res.send({
	  			code : "-1",
	  			msg : "Duplicate Entry into the database"
	  		});
			console.log("Error! Duplicate Entries!");	  		
	  	} 
	    else{
	    	res.send({
	    		code : "1",
	    		msg : "Successfully written to database"
	    	});
	    }
	  })
	})

	app.get('*',function(req,res){
	  res.sendFile(path.resolve("./../app/404Error.html"));
	});

}