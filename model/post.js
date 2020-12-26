/**
 * 文章模型
 */
module.exports =  class Category extends require('./model'){

    /**
     * 获取文章
     */

    static getList(){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT id,`name`,path FROM category ORDER BY `index` DESC'
            this.query(sql).then(results=>{
                resolve(results)
            }).catch(err=>{
                console.log(`获取文章类目列表失败：${err.message}`)
                reject(err)
            })
        })
    }
}