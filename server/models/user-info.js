/**
 * Created by Lucky on 2018/4/9.
 */
const dbUtils = require('./../utils/db-util')

const user = {

    /**
     * 数据库创建用户
     * @param  {object} model 用户数据模型
     * @return {object}       mysql执行结果
     */
    async create ( model ) {
        let result = await dbUtils.insertData( 'user_info', model )
        return result
    },

    /**
     * 查找一个存在用户的数据
     * @param  {obejct} options 查找条件参数
     * @return {object|null}        查找结果
     */
    async getExistOne(options ) {
        let _sql = `
    SELECT * from user_info
      where email="${options.email}" or name="${options.name}"
      limit 1`
        let result = await dbUtils.query( _sql )
        if ( Array.isArray(result) && result.length > 0 ) {
            result = result[0]
        } else {
            result = null
        }
        return result
    },

    /**
     * 根据用户名和密码查找用户
     * @param  {object} options 用户名密码对象
     * @return {object|null}         查找结果
     */
    async getOneByUserNameAndPassword( options ) {
        let _sql = `
    SELECT * from user_info
      where password="${options.password}" and name="${options.name}"
      limit 1`
        let result = await dbUtils.query( _sql )
        if ( Array.isArray(result) && result.length > 0 ) {
            result = result[0]
        } else {
            result = null
        }
        return result
    },

    /**
     * 根据用户名查找用户信息
     * @param  {string} userName 用户账号名称
     * @return {object|null}     查找结果
     */
    async getUserInfoByUserName( userName ) {

        let result = await dbUtils.select(
            'user_info',
            ['id', 'email', 'name', 'detail_info', 'create_time', 'modified_time', 'modified_time' ])
        if ( Array.isArray(result) && result.length > 0 ) {
            result = result[0]
        } else {
            result = null
        }
        return result
    },
    /*
    * 查询所有用户分页
    * @param {object} options
    * */
    async getAllUser(options){
      let  _sql='SELECT * from user_info';
      let result = await dbUtils.query( _sql );
      return result;
    },
    /*
    * 删除用户
    * @param (string) id
    * */
    async deleatUserById(id){
      let _sql="DELETE FROM user_info WHERE id="+id;
      let  result=await dbUtils.query(_sql);
      if (result.affectedRows==1) {
        result="succes";
      }
      return result;
    },
  /*
  * 新增一个学生
  * @param {object}
  * */
  async adduser(options){
    let _sql='insert into user_info(name,password,email,create_time) values("'+options.name+'",' +
      '"'+options.password+'",' +
      '"'+options.email+'",'+
      '"'+options.creat_time+'")';
    let result=await  dbUtils.query(_sql);
    if (result.affectedRows==1){
      result=true;
    }
    return result;
  },
  /**
   * 分页查询
   * @param (string)page 当前页
   * @param (string)limit 每页多少数据
   * */
  async  findDataByPage(page,limit){
      let  start=(page-1)*limit;
      let end=page*limit;
      let _sqlCount='SELECT COUNT(*) AS total_count FROM user_info';
      let  _sqlByPage='select * from user_info order by id limit '+start+','+end+';'
      let result={
        code:'',
        msg:'',
        count:'',
        data:null
      }
      let count=await  dbUtils.query(_sqlCount);
      if (Array.isArray(count) && count.length > 0) {
        result.count=count[0].total_count;
      }else {
        count=null;
      }
      let data=await  dbUtils.query(_sqlByPage);
      if (Array.isArray(data) && data.length > 0){
          result.data=data;
      } else {
          result.data=null;
      }
      return result;
  },
  /**
   * 通过id修改用户资料
   * @param (string)id
   * @param (object) user
   * */
  async updateUserById(user,id){
    let _sql="UPDATE user_info SET `password` = '"+ user.password +"', `name` = '" +user.name +"' WHERE id="+id;
    let result=await  dbUtils.query(_sql);
    if (result.affectedRows==1){
      result='succes';
    }
    return result;
  }
}



module.exports = user