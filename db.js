const mongoose = require('mongoose');
const CustomError = require('./helpers/customError');
const {mongoURI} = require('./config');
mongoose.connect(mongoURI)
.then(()=>console.log('connected to database'))
.catch((err)=>{
	console.log(err)
	process.exit(1)
})