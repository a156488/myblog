/**
 * 用户数据模型
 */
module.exports =  class User extends require('./model'){

    /**
     * @param {String} username 登陆账号
     * @param {String} password 登陆密码
     * 用户数据
     */

    static login(username,password){
        return new Promise((resolve,reject)=>{
            let sql = 'SELECT id,username FROM user WHERE username = ? AND password = ?'
            this.query(sql,[username,password]).then(results=>{
                resolve(results[0])
            }).catch(err=>{
                console.log(`登录失败：${err.message}`)
                reject(err)
            })
        })
    }
}