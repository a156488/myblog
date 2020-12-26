const express = require('express');
const category = require('../middleware/category');
const article = require('../middleware/article')
const auth = require('../middleware/auth');

//搜索子应用
const router = express.Router();

//加载搜索页面
router.get('/', [article.getListByKeyword,category.getList,auth.getUser],(req, res)=>{
    let {articles,categories,user} = req;
    res.render('search',{articles:articles,categories:categories,keyword:req.query.keyword,user:user});
});

module.exports = router;
