/**
 *  @fileoverview policies schema
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 23/9/20
 * @company securiumsolutions
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const policiesSchema = new Schema({
  termsAndConditions: {
    type: String,
    default: null
  },
  termsOfUse: {
    type: String,
    default: null
  },
  accessibilityPolicy: {
    type: String,
    default: null
  },
  privacyPolicy: {
    type: String,
    default: null
  },
  dataSubprocessors: {
    type: String,
    default: null
  },
  refundPolicy: {
    type: String,
    default: null
  },
  reschedulingPolicy: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('policies', policiesSchema);

