/**
 * Created by Lucky on 2018/4/9.
 */
/**
 * 错误页面子路由
 */

const router = require('koa-router')();

module.exports = router.get('*',  async ( ctx ) => {
    const title = 'error'
    await ctx.render('error', {
        title
    })
})