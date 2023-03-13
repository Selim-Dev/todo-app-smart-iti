const CustomError = require('./helpers/customError');

require('dotenv').config()

const requiredEnvs = ['JWT_SECRET','MONGO_URI']

const missingEnvs = requiredEnvs.filter(envName=>!process.env[envName]);
if(missingEnvs.length){
	throw new CustomError(`missing required envs ${missingEnvs.join(',')}`,500)
}
module.exports = {
	saltRound:Number(process.env.SALT) || 14,
	jwtSecret:process.env.JWT_SECRET,
	mongoURI:process.env.MONGO_URI,
	port:process.env.PORT || 3000
}