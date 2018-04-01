const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err)
		return console.log('Unable to connect to the server');
	console.log('Connection established');

	 const db=client.db('TodoApp');
	// db.collection('Users').deleteMany({
	// 	name:'Adnan'
	// }).then((result)=>{
	// 	console.log(result);
	//});

	db.collection('Users').deleteMany({name:'adnan'}).then((result)=>{
		console.log(result);
	},(err)=>{
		if(err)
			return console.log('Unable to find the data for deletion');
	});

	db.collection('Users').findOneAndDelete({
		_id : new ObjectID('5ac06cff43b6260db0871662')}).then((result)=>{
		console.log(result);
	},(err)=>{
		if(err)
			return console.log('Unable to find the data for deletion');
	});
});
