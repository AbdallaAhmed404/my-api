const express = require('express')
const cors = require('cors');
const app = express()
const connectDB = require('./conect')
const AdminRouter = require('../e-commerce project/routes/AdminRouts')
const errorHandler = require('../e-commerce project/middlewares/errorhandler');

app.use(cors());
app.use(express.json())
app.use('/admin',AdminRouter)
app.use(errorHandler);
connectDB()
app.listen(8000,()=>{
    console.log('server is running on port 8000')
})
