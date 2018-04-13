/**
 * Created by Lucky on 2018/4/9.
 */
/**
 * 管理员用户子路由
 */

const router = require('koa-router')()
const admin = require('./../controllers/admin')

module.exports = router.get( '/', admin.indexPage )