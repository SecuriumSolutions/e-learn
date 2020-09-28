/**
 *  @fileoverview User Register Model 
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 14/9/20
 * @company securiumsolutions
 */

const user = require("../../models/user");

const dao = require('../DAO.js');
const passwordUtil = require('../../utils/passwordUtil');

const userSignup = async function (request, response) {
  const { body } = request;
  if (!body.fname || !body.lname || !body.email || !body.phoneCode || !body.phoneNumber || !body.password || !body.agreed) {
    console.log('body parameters missing');
    return response.params_missing();
  }
  let hashedPassword = passwordUtil.hashPassword(body.password);
  let docObject = {
    fname: body.fname,
    lanme: body.lname,
    email: body.email,
    phoneCountry: body.phoneCountry,
    phoneCode: body.phoneCode,
    phoneNumber: body.phoneNumber,
    password: hashedPassword,
    agreed: body.agreed
  }
  const registerUser = await dao.createOne(docObject);
  if (!registerUser) {
    console.log('Error in user register');
    return response.db_error();
  }
  return response.success();
};

module.exports = { userSignup };