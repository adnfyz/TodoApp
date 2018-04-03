const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err)
		return console.log('Unable to connect to mongodb');
	console.log('Connected to database server');

	const db=client.db('TodoApp');

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5abf979ac075e21bc0f390b8')
	},{
		$set:{
			completed:true
		}
	},{
		returnOriginal :false
	}).then((result)=>{
		console.log(result);
	});

	db.collection('Users').findOneAndUpdate({
		_id:new ObjectID('5ac06ce490d51516b4934823')
	},{
		$set:{name :'Adnan Fayaz'},
		$inc:{age:1}
		
	},{
		returnOriginal:false
	}).then((result)=>{
		console.log(result);
	});

});