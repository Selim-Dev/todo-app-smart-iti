const express = require('express');
require('express-async-errors');
const {port} = require('./config');
const app = express();
const morgan = require('morgan');
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const todoRoutes = require('./routes/todoRoutes');
require('./db')

app.use(morgan('combined'));
app.use(express.json())
app.use(express.urlencoded())


app.use(cors())

app.get('/',(req,res)=>{
	res.send('hello world')
})
app.use('/user',userRoutes)
app.use('/todo',todoRoutes)


app.listen(port,()=>{
	console.log(`Server is running on port ${port}`);
})

// 4 parameters error handler
app.use((err,req,res,next)=>{
	err.statusCode = err.statusCode || 500;
	res.status(err.statusCode).json({
		status: `${err.statusCode}`.startsWith('4') ? 'fail' : 'error',
		message:err.message || 'something went wrong',
		errors:err?.errors
	})
});

