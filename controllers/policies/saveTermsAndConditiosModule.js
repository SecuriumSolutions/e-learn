/**
 *  @fileoverview Save terms And conditions Policy 
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 25/9/20
 * @company securiumsolutions
 */
const dao = require('../../Dao/policies');

const saveTermsAndConditions = async function (request, response) {
  let { body } = request.body;
  if (!body.termsAndConditions) {
    console.log('body parameters missing');
    return response.body_params_missing();
  }
  let updatePolicy = await dao.updateOne({}, {termsAndConditions: body.termsAndConditions});
  if (!updatePolicy) {
    console.log('update policy failed');
    return response.policy_not_updated();
  }
  console.log('policy updated successfully!');
  return response.policy_updated();
};

module.exports = { saveTermsAndConditions };
