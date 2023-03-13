const express = require('express');
const router = express.Router();
const fs = require('fs')
const path = require('path')
// todos
// create todos
router.post('/',(req,res)=>{
	res.send('create user')

})
// gettodos
router.get('/',(req,res,next)=>{
	// const filter = {}
	// const {status,title} = req.query;
	// if(status) filter.status = status;
	// if(title) filter.title = title;
	// const todos = await Todo.find(filter);
	// fs.readFile(path.join(__dirname,'test.json'),'utf-8',(err,data)=>{
	// 	if(err) {
	// 		return  next(err)
	// 	}else{
	// 		res.send(data)
	// 	}
		
	// })
})
router.get('/:id',(req,res)=>{})
// update user
router.patch('/:id',(req,res)=>{})
// delete user
router.delete('/:id',(req,res)=>{});


module.exports = router;
