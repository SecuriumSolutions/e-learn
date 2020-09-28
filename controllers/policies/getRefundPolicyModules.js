/**
 *  @fileoverview Refund Policy 
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 24/9/20
 * @company securiumsolutions
 */
const dao = require('../../Dao/policies');

const getRefundPolicy = async function (request, response) {
  let getPolicy = await dao.findOne({}, {refundPolicy: 1, _id: 0});
  if (!getPolicy) {
    console.log('fail in getting policy');
    return response.policy_fetch_failed();
  }
  console.log('policy fetched successfully!');
  return response.policy_fetch_success();
};

module.exports = { getRefundPolicy };