/**
 * Created by Lucky on 2018/4/9.
 */
/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')

const routers = router
    .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
    .get('/userAllList',userInfoController.getUserAll)
  .post('/findDataByPage',userInfoController.findDataByPage)
    .post('/user/signIn.json', userInfoController.signIn)
    .post('/user/signUp.json', userInfoController.signUp)
  .post('/user/deleatUser', userInfoController.deleatUserById)
  .post('/user/addUser',userInfoController.addUser)
 .post('/user/updateUserById',userInfoController.updateUserById)

module.exports = routers;