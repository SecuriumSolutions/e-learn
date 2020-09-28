/**
 *  @fileoverview  Policy  Dao 
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 23/9/20
 * @company securiumsolutions
 */
module.exports = {
    //create a policies 
    createOne: function (data) {
      return new Promise(function (reject, resolve) {
        userModel.create(data, function(err, result){
          if (err) {
            reject(err);
          }
          resolve(result);
        })
      })
    },
    //update a polices
    updateOne: function (query, data) {
      return new Promise(function (reject, resolve) {
        userModel.findOneAndUpdate(query, data, function (err, result) {
          if (err) {
            reject(err);
          }
          resolve(result);
        })
      })
    }
  }
  