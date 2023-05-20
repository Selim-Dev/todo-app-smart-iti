const express = require('express');
const router = express.Router();
const fs = require('fs')
const path = require('path');
const Todo = require('../models/todo');
const verify = require('../middlewares/verify');
// todos
// create todos
router.post('/',verify,async(req,res)=>{
	const createdTodo = await Todo.create({
		title:req.body.title,
		status:req.body.status,
		user:req.user._id
	})
	res.send(createdTodo);
})
// gettodos
router.get('/',verify,async(req,res,next)=>{
	const todos = await Todo.find({user:req.user._id}).populate('user');
	res.json(todos)
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
