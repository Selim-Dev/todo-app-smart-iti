const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { saltRound } = require('../config');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	username:{
		type:String,
		required:true,
		unique:true
	},
	age:Number,
	password:{
		type:String,
		required:true
	} 
},{
	toJSON:{
		// ret is the teturned object
		transform:(doc,ret)=> _.omit(ret,['password','__v']),
	},
	// toObject:{
	// 	transform:(doc,ret)=> _.omit(ret,['password','__v'])
	// }
});
userSchema.pre('save',async function(next){
	const userDocument = this;
	if(userDocument.isModified('password')){
		const hashedPassword = await bcrypt.hash(userDocument.password,saltRound);
		userDocument.password = hashedPassword;
	}
	next();
})
userSchema.methods.comparePassword = function (password){
	const userDocument = this;
	return bcrypt.compare(password,userDocument.password)
}
// userSchema.statics.
const User = mongoose.model('User',userSchema);

module.exports = User;