const express = require('express');
const {adminAuth}= require('../Middlewares/admin.middleware')
const {CategoryAdd,getAllCategory,updateCategory,deleteCategory}= require('../Controllers/category.controller')
const router = express.Router();

router.post('/add',adminAuth,CategoryAdd);
router.get('/views',getAllCategory);
router.put('/edit/:id',adminAuth,updateCategory);
router.delete('/delete',adminAuth,deleteCategory);


module.exports=router;          