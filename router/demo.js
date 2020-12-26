const express = require('express');
const router =express.Router();

//加载首页页面
router.get('/', function(req, res, next) {
    res.render('about');
});

module.exports = router;
