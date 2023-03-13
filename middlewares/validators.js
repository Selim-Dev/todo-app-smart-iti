const Joi = require("joi");


const loginSchema = Joi.object({
	username: Joi.string().min(3).max(30).required(),
	password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

const validateSignin = (req,res,next)=>{
	const {error} = loginSchema.validate(req.body);
	if(error){
		const err = new Error(error.details[0].message);
		err.statusCode = 400;
		return next(err)
	}
	next();
}
module.exports = {
	validateSignin
}