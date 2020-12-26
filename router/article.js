/**
 * 文章子应用
 */
const express = require('express');
const article = require('../middleware/article')
const articleApp =express();
const auth = require('../middleware/auth');
const category = require('../middleware/category');

articleApp.use(category.getList,auth.getUser)

articleApp.get('/list/:id',[article.getListByCategoryId],(req,res) => {
  let {articles,categories,category,user} = req
  res.render('list',{articles:articles,categories:categories,category:category,user:user})
})


module.exports = articleApp();