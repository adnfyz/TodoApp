const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err)
		return console.log('Unable to connect to mongodb');
	console.log('Connected to database server');

	const db=client.db('TodoApp');
	// db.collection('Todos').insertOne({
	// 	text:'Something to do',
	// 	completed:false
	// },(err,result)=>{
	// 	if(err){
	// 		return console.log('Unable to insert todo',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// });

	// db.collection('Users').insertOne({
	// 	name:'Adnan',
	// 	age:24,
	// 	location:'Srinagar'
	// },(err,results)=>{
	// 	if(err)
	// 		return console.log('Unable to write to db'+err);
	// 	console.log('Succesfully created the record');
	// 	console.log(results.ops[0]._id.getTimestamp());

	// });

	db.collection('Users').insertOne({
		name:'adnan',
		age:24,
		location:'Srinagar'
	},(err,results)=>{
		if(err)
			return console.log('cannot insert into mongodatabase');
		console.log('succesfuult inserted the record at '+results.ops[0]._id.getTimestamp());	
});
	client.close();
});