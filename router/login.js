const express = require('express');
const router = express.Router();
const category = require('../middleware/category');
const User = require('../model/user')

/* GET home page. */
router.get('/', [category.getList],(req, res)=>{
    let {categories} = req;
    res.render('login',{categories:categories,msg:''});
});

router.post('/',(req, res,next)=>{
    let {username,password} = req.body
    User.login(username,password).then(results=>{
        if (results){
            //session存储（key = value）
            res.session.user = results
            res.redirect('/')
        }else{
            res.render('/login',{msg:'登录失败！用户名或密码错误！'})
        }
    }).catch(err=>{
        next(err)
    })
});

module.exports = router;
