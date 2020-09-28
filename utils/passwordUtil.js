/**
 *  @fileoverview password util
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 18/9/2020
 * @company securiumsolutions
 */

const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  hashPassword: function (plainPassword) {
    bcrypt.hash(plainPassword, saltRounds).then(function(hash) {
      return hash;
    });
  },
  comparePassword: function (plainPassword, hashedPassword) {
    bcrypt.compare(plainPassword, hashedPassword).then(function(result) {
      return result;
    });
  }
}