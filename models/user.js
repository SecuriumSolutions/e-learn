/**
 *  @fileoverview User collection
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 12/9/20
 * @company securiumsolutions
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true, index: true, dropDups: true,
  },
  phoneCountry: {
    type: String
  },
  phoneCode: {
    type: Number,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  registerType:{
    type: String,
    require: true
  },
  coupne: {
    type: String,
  },
  notification:{
      type: String,
  },
  creditElearnig:{
    type: String,
    require: true
  },
  purchaseHistory:{
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  role: {
    type: String,
    default: 'basic',
    enum: ["basic", "supervisor", "admin"]
   },
  date: {
    type: Date,
    default: Date.now
  },
  agreed: {
    type: Boolean,
    default: false
  },
  accessToken: {
    type: String,
    default: null
  },

}, {
  timestamps: true
});

module.exports = mongoose.model('users', userSchema);