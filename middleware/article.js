const Article = require('../model/article')

/**
 *文章中间件
 * @type {{getHot: module.exports.getHot}}
 */

module.exports = {
    /**
     * 获取热门文章
     * @param req
     * @param res
     * @param next
     */
    getHot:(req,res,next) => {
        Article.getHot(3).then(results=>{
            req.hots = results
            next()
        }).catch(err=>{
            next(err)
        })
    },

    /**
     * 获取最新文章
     * @param req
     * @param res
     * @param next
     */
    getList:(req,res,next) => {
        Article.getList().then(results=>{
            req.articles = results
            next()
        }).catch(err=>{
            next(err)
        })
    },

    /**
     * 获取指定类目下的文章
     * @param req
     * @param res
     * @param next
     */
    getListByCategoryId:(req,res,next) => {
        let id = req.params.id
        Article.getListByCategoryId(id).then(results=>{
            req.articles = results
            next()
        }).catch(err=>{
            next(err)
        })
    },

    /**
     * 获取指定关键词的文章
     * @param req
     * @param res
     * @param next
     */
    getListByKeyword:(req,res,next) => {
        let keyword = req.query.keyword
        Article.getListByKeyword(keyword).then(results=>{
            req.articles = results
            next()
        }).catch(err=>{
            next(err)
        })
    }
}