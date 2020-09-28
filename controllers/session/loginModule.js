/**
 *  @fileoverview User login Model 
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 12/9/20
 * @company securiumsolutions
 */
//const dao = require('../DAO.js');
//const jwtUtil = require('../utils/jwtUtil.js');
//const passwordUtil = require('../utils/passwordUtil.js');

const userLogin = async function (request, response) {
  const { body } = request;
  if (!body.email || !body.password) {
    console.log('body parameters missing');
    return response.params_missing();
  }
  const userData = await dao.findOne({email: body.email});
  const verifyPassword = await passwordUtil.comparePassword(body.password, userData.password);
  if (!verifyPassword) {
    console.log('password mismatch');
    return response.password_mismatch();
  }
  const token = await jwtUtil.createToken({email: body.email});
  const updateToken = await dao.updateOne({email: body.email}, {accessToken: token});
  if (!updateToken) {
    console.log('Error in token updation');
    return response.token_generation_error();
  }
  return response.success();
};

module.exports = { userLogin };
