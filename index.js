import express from 'express'
import ProductController from './src/controllers/product.controller.js'
import ejsLayouts from 'express-ejs-layouts'
import addProductValidation from './src/middlewares/validation.middleware.js'
import path from 'path'


//creating a server

const server=express();

//parse the form data 
server.use(express.urlencoded({ extended: true }))


//setup view engine settings
server.set("view engine","ejs")
server.set("views",path.join(path.resolve(),'src','views'))
server.use(ejsLayouts)

//create a instance of productcontroller class
const productController =new ProductController()
//creating a middleware

server.get('/',productController.getProducts)
server.get('/new',productController.getAddForm)
server.get('/update-product/:id',productController.getUpdateProductView)
server.get('/delete-product/:id',productController.deleteProduct)
server.post('/',addProductValidation,productController.addNewProduct)
//post request is posted on the same link when form is submitted, before on the same address get request i posted
//addproductvalidation is middleware to validate data , first it is written in controller but the pattern of MVC says that everything should has their own function to do and here it is tightly coupled and middleware is introduced to make them losely coupled.
server.post('/update-product',productController.postUpdateProduct)
server.use(express.static('src/views'))
server.use(express.static(path.join(path.resolve(),'public')))

server.listen(3400)