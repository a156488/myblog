const Category = require('../model/category')

/**
 *文章类目中间件
 * @type {{getHot: module.exports.getHot}}
 */

module.exports = {
    /**
     * 获取文章类目列表
     * @param req
     * @param res
     * @param next
     */
    getList:(req,res,next) => {
        Category.getList().then(results=>{
            req.categories = results
            next()
        }).catch(err=>{
            next(err)
        })
    },

}