const jwt = require('jsonwebtoken');
const {promisify} = require('util');
const User = require('../models/user');
const CustomError = require('../helpers/customError');
const {jwtSecret} = require('../config');
// const jwtSecret = process.env.JWT_SECRET;
// if(!jwtSecret) throw new CustomError('jwt secret not found',500)

const verifyJwt = promisify(jwt.verify);
module.exports = async (req,res,next)=>{
	try{
		//  extract token from headers
		const token = req.headers.authorization;
		if(!token) return next(new CustomError('unauthorized',401))
		//  verify the token (secret)
		const {id} = await verifyJwt(token,jwtSecret);
		// find user by id
		const user = await User.findById(id);
		if(!user) return next(new CustomError('unauthorized',401))
		//  attach user to request body
		req.user = user;
		next();	
	}catch(err){
		console.log(err)
		next(err)
	}
}