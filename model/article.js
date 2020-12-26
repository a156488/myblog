/**
 * 文章数据模型
 */
module.exports =  class Article extends require('./model'){
    /**
     * 获取热门推荐文章
     * @param num 条目数
     */
    static getHot(num){
        return new Promise((resolve,reject)=>{
                let sql = 'SELECT id,title,content,date FROM article WHERE hot = 1 LIMIT ?'
            this.query(sql,num).then(results=>{
                resolve(results)
            }).catch(err=>{
                console.log(`获取热门推荐文章失败：${err.message}`)
                reject(err)
            })
        })
    }

    /**
     * 获取文章列表
     */

    static getList(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT id,title,content,date,icon FROM article ORDER BY DATE DESC'
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err=>{
                console.log(`获取文章列表失败：${err.message}`)
                reject(err)
            })
        })
    }

    /**
     * 获取指定类目下的文章列表
     * @param {integer}id 类目编号
     */

    static getListByCategoryId(id){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT id,title,content,date,icon FROM article WHERE category_id ORDER BY DATE DESC'
            this.query(sql,id).then(results=>{
                resolve(results)
            }).catch(err=>{
                console.log(`获取文章列表失败：${err.message}`)
                reject(err)
            })
        })
    }

    /**
     * 获取指定关键词的文章列表
     * @param {integer}keyword 类目编号
     */

    static getListByKeyword(keyword){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT id,title,content,date,icon FROM article WHERE title LIKE ? ORDER BY DATE DESC'
            this.query(sql,`%${keyword}`).then(results=>{
                resolve(results)
            }).catch(err=>{
                console.log(`获取指定关键词的文章列表失败：${err.message}`)
                reject(err)
            })
        })
    }
}