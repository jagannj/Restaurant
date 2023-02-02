const SubCategory = require('../models/subcategory.model');
exports.SubCategoryAdd =async(req,res,next)=>{
    try {
        const {foods,CategoryId}=req.body;
        if(!CategoryId||!foods) throw createError.BadRequest()
        const category = new SubCategory({foods,CategoryId});
        const saveUser = await category.save()
        res.send(saveUser)
    } catch (error) {
        next(error)
    }
};