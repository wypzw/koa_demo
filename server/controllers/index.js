/**
 * Created by Lucky on 2018/4/9.
 */
module.exports = async ( ctx ) => {
    const title = '首页'
    await ctx.render('index', {
        title
    })
}