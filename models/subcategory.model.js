const mongoose = require('mongoose');
const Schema = mongoose.Schema
const  subCategorySchema = new Schema({
foods:{
    type: String,
    required:true
},
CategoryId:{
    type:Number,
    required: true,
}
},{timestamps:true});
const SubCategory = mongoose.model('subCategory',subCategorySchema)
module.exports= SubCategory;