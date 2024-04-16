import {body, validationResult } from 'express-validator'

//export default should
//HoistedDeclaration => a function
//class
//assignment expression

const addProductValidation = async (req,res,next) =>{
    //validata data using thirdparty validators
    
    //1. Setup rules for validation
    const rules= [
        body('name')
            .notEmpty()
            .withMessage('Name is required'),
        body('price')
            .isFloat({gt:0})
            .withMessage('Price must be a positive number'),
        body('imageUrl')
            .isURL()
            .withMessage('Invalid url')
    ];
    //2.run this rules
    await Promise.all(
        rules.map((rule)=>rule.run(req))
    );

    //3. check if there are any errors after running the rules
    var validationErrors= validationResult(req);
    if(!validationErrors.isEmpty()){
        return res.render('new-product',
        {errorMessage:validationErrors.array()[0].msg})
    }

    next();


    //validate data
    // const {name,price,imageUrl}=req.body;
    // let errors = [];
    // if(!name||name.trim()==''){
    //   errors.push("Name is required")  
    // }
    // if(!price || parseFloat(price)<1){
    //     errors.push('price must be a postive number');
    // }
    // try{
    //     const validUrl=new URL(imageUrl);  
    // }
    // catch(err){
    //     errors.push("URL is invalid")
    // }
    // if(errors.length>1){
    //     return res.render("new-product",{errorMessage:errors[0]})
    // }
    // next()
    
}

export default addProductValidation;