/**
 *  @fileoverview Save Accessibility Policy 
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 23/9/20
 * @company securiumsolutions
 */


const dao = require('../../Dao/policies.js');

const saveAccessibilityPolicy = async function (request, response) {
  let { body } = request.body;
  if (!body.accessibilityPolicy) {
    console.log('body parameters missing');
    return response.body_params_missing();
  }
  let updatePolicy = await dao.updateOne({}, {accessibilityPolicy: body.accessibilityPolicy});
  if (!updatePolicy) {
    console.log('update policy failed');
    return response.policy_not_updated();
  }
  console.log('policy updated successfully!');
  return response.policy_updated();
};

module.exports = { saveAccessibilityPolicy };


