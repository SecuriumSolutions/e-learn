
/**
 *  @fileoverview All courses list
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 19/9/2020
 * @company securiumsolutions
 */

 const dao = require('../DAO.js');
const passwordUtil = require('../../utils/passwordUtil');

const changePassword = async function (request, response) {
  let { token } = request.headers;
  let { body } = request.body;
  if (!token) {
    console.log('token missing');
    return response.token_not_found();
  }
  const userData = await dao.findOne({accessToken: token});
  if (!userData) {
    console.log('user data missing');
    return response.user_not_found();
  }
  if (!body.oldPassword || !body.newPassword || !body.confirmPassword) {
    console.log('body parameters missing');
    return response.body_params_missing();
  }
  if (body.newPassword != body.confirmPassword) {
    console.log('new password and confirm password must be same');
    return response.password_different();
  }
  const verifyPassword = await passwordUtil.comparePassword(body.oldPassword, userData.password);
  if (!verifyPassword) {
    console.log('old password mismatch');
    return response.password_mismatch();
  }
  let hashedPassword = await passwordUtil.hashPassword(body.newPassword);
  let updatePassword = await dao.updateOne({accessToken: token}, {password: hashedPassword});
  if (!updatePassword) {
    console.log('error in password change');
    return response.password_change_error();
  }
  console.log('password changed successfully!');
  return response.password_change_successfull();
};

module.exports = { changePassword };
