/**
 *  @fileoverview privacy Policy 
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 25/9/20
 * @company securiumsolutions
 */

const dao = require('../../Dao/policies');

const savePrivacyPolicy = async function (request, response) {
  let { body } = request.body;
  if (!body.privacyPolicy) {
    console.log('body parameters missing');
    return response.body_params_missing();
  }
  let updatePolicy = await dao.updateOne({}, {privacyPolicy: body.privacyPolicy});
  if (!updatePolicy) {
    console.log('update policy failed');
    return response.policy_not_updated();
  }
  console.log('policy updated successfully!');
  return response.policy_updated();
};

module.exports = { savePrivacyPolicy };