/**
 * Created by Lucky on 2018/4/9.
 */
/**
 * 主页子路由
 */

const router = require('koa-router')()
const index = require('../controllers/index')

module.exports = router.get('/', index)