const Category = require('../models/category.model');
const User = require('../models/User.model');
exports.CategoryAdd =async(req,res,next)=>{
    try {
        const {CategoryName}=req.body;
        if(!CategoryName) throw createError.BadRequest()
        const category = new Category({CategoryName});
        const saveUser = await category.save()
        res.send(saveUser)
    } catch (error) {
        next(error)
    }
};
exports.getAllCategory= async(req,res,next)=>{
    Category.find().then(response=>{
        res.json({response})
    }).catch(error=>{res.json({message:'An error Occured'})})
};
exports.updateCategory= async(req,res,next)=>{
    // let userId = req.body.userId;
    // console.log(userId,"000");
    // let updateData = {
    //     CategoryName:req.body.CategoryName
    // } ;
    User.findByIdAndUpdate(req.params.id,{$set:req.body})
    .then((data)=>{
        console.log(data);
        res.json({
            message:'Category updated Sucessfully'
        })
    }).catch(error=>{res.json({message:'An error Occured'})})
}   

exports.deleteCategory= async(req,res,next)=>{
    let userId = req.body.id;
    User.findByIdAndRemove(userId)
    .then(()=>{
        res.json({
            message:'Category Deleted Sucessfully'
        })
    }).catch(error=>{res.json({message:'An error Occured'})})
}  
