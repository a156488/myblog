const mysql = require('mysql');

/**
 * 封装模型的基类>
 * @type {module.Model}
 */

module.exports = class Model{
    static conn = null

    /**
     * 数据库连接方法
     */

    static connection(){
        Model.conn = mysql.createConnection(
            {
                host:'127.0.0.1',
                user:'root',
                password:'123456',
                database:'blog'
            }
        )
        Model.conn.connect(err => {
            if (err){
                console.log(`数据库连接失败：${err.message}`)
            }
        })
    }

    /**
     * 关闭数据库连接
     */

    static end(){
        if (null != Model.conn){
            Model.conn.end()
        }
    }


    /**
     *
     * @param {String}sql 要执行的sql语句
     * @param {Array}params 给sql语句的占位符进行赋值的参数数组
     */

    static query(sql,params=[]){
        return new Promise((resolve,reject) =>{
            this.connection()

            Model.conn.query(sql,params,(err,results)=>{
                if (err){
                    reject(err)
                }else {
                    resolve(results)
                }
            })

            this.end()
        })
    }
}