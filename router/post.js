const express = require('express');
const category = require('../middleware/category');
const article = require('../middleware/article');
const auth = require('../middleware/auth');

//博文子应用
const router = express.Router();

//加载博文列表页面
router.get('/', [auth.getUser,category.getList,article.getListByCategoryId],(req, res)=>{
    let {categories,articles,user} = req;
    res.render('post',{categories:categories,articles:articles,user:user});
});

// //加载博文详情页面
// router.get('/:id',[article.getListByCategoryId],(req, res)=>{
//     let {categories} = req;
//     res.render('post',{categories:categories});
// });

module.exports = router;
