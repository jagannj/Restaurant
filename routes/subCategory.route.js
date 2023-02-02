const express = require('express');
const {adminAuth}= require('../Middlewares/admin.middleware')
const {SubCategoryAdd}= require('../Controllers/subcategory.controller')
const router = express.Router();

router.post('/add',adminAuth,SubCategoryAdd);



module.exports=router;          