const express = require('express')
const AdminRouter = express.Router()
const {  AddProduct, AllProduct} = require('../controllers/AdminController')


AdminRouter.post('/addproduct', AddProduct)

AdminRouter.get('/allproduct', AllProduct) 


module.exports = AdminRouter

