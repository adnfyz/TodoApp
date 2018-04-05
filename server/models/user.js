
const mongoose=require('mongoose');
const user=mongoose.model('User',{
	email:{
		type: String,
		minlength:1,
		required:true,
		trim:true,
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'PLease enter the valid email']
  }
});

module.exports={user};