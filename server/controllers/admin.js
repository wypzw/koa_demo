/**
 * Created by Lucky on 2018/4/9.
 */
module.exports = {

    async indexPage ( ctx ) {
        const title = 'admin page'
        await ctx.render('admin', {
            title,
        })
    },

}