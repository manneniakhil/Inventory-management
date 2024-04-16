import path from 'path'
import ProductModel from '../models/product.model.js'
export default class ProductController{
    getProducts(req,res){
        //path.resolve gives current file executing directory and it combimnes different elements
        let products=ProductModel.get();
        //console.log(products)
        return res.render("products",{products:products})
        //here products is the file name and data field is optional
    }
    getAddForm(req,res){
        return res.render("new-product",{errorMessage:null})
    }
    addNewProduct(req,res){
        //validate form data
       
        console.log(req.body)
        ProductModel.add(req.body)
        let products=ProductModel.get()
        return res.render("products",{products});
    }
    getUpdateProductView(req,res,next){

        //1.if product exists then render view

        const id=req.params.id;
        console.log(id)
        const productFound = ProductModel.getById(id);
        //console.log(productFound)
        if(productFound){
            res.render('update-product',{
                product:productFound,
                errorMessage:null
            })
        }
        else{
            res.status(401).send("Product not found")
        }
    }
    postUpdateProduct(req,res,next){
        //console.log(req.body)
        ProductModel.update(req.body)
        let products=ProductModel.get()
        return res.render("products",{products});
    }
    deleteProduct(req,res){
        const id = req.params.id; 
        ProductModel.delete(id);
        let products=ProductModel.get()
        return res.render("products",{products})
    }
}