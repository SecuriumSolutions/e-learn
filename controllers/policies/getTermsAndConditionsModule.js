/**
 *  @fileoverview Terms and Conditions Policy 
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 25/9/20
 * @company securiumsolutions
 */
const dao = require('../../Dao/policies');

const getTermsAndConditions = async function (request, response) {
  let getPolicy = await dao.findOne({}, {termsAndConditions: 1, _id: 0});
  if (!getPolicy) {
    console.log('fail in getting policy');
    return response.policy_fetch_failed();
  }
  console.log('policy fetched successfully!');
  return response.policy_fetch_success();
};

module.exports = { getTermsAndConditions };

