const express = require('express');
const router = express.Router();
const category = require('../middleware/category');

/* GET home page. */
router.get('/', [category.getList],(req, res)=>{
    let {categories} = req;
    res.render('about',{categories:categories});
});

module.exports = router;
