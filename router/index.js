const express = require('express');
const category = require('../middleware/category');
const article = require('../middleware/article')
const auth = require('../middleware/auth');

//首页子应用
const router =express.Router();

router.use(auth.getUser)

//加载首页页面
router.get('/',[article.getHot,article.getList,category.getList],(req,res)=>{
  let {hots,articles,categories,user} = req
  res.render('index',{hots:hots,articles:articles,categories:categories,user:user})
})

module.exports = router;
