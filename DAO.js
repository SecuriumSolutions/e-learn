const userModel = require('./models/user.js');
const coursesModel = require('./models/courses.js');
module.exports = {
  //user create 
  createOne: function (data) {
    return new Promise(function (resolve, reject) {
      userModel.create(data, function(err, result){
        if (err) {
          reject(err);
        }
        resolve(result);
      })
    })
  },
  //user update
  updateOne: function (query, data) {
    return new Promise(function (resolve, reject) {
      userModel.findOneAndUpdate(query, data, function (err, result) {
        if (err) {
          reject(err);
        }
        resolve(result);
      })
    })
  },
  //admin find a user 
  find: function({id :id},query){
      return new Promise (function (resolve, reject){
        userModel.find(query,{id :id}, function(err, result){
          if(err){
            reject(err);
          }
          resolve(result);
        });
      });
  },
  //delete user
  deleteOne: function ({id:id}, query){
    return new Promise (function (resolve, reject){
        userModel.findByIdAndDelete({_id: id },query,  function(err, result){
            if (err){
                reject(err);
            }
            resolve(result);
        });
    });
  },
  //admin... Course create 
  createOne : function (query, data){
    return new Promise (function (resolve, reject){
      coursesModel.create(query, data, function(err, result){
        if(err){
          reject(err);
        }
        resolve(result);
      });
    });
  },
  //UPDATES A SINGLE admin IN THE course
  updateOne: function({id: id}, docData){
    return new Promise( function (resolve, reject){
      coursesModel.findByIdAndUpdate({_id: id}, docData, function(error, result){
        if(error){
          reject(error);
        }
        resolve(result);
      });
    });
  },
  // admin delete a course
  deleteOne: function({id: id}){
    return new Promise (function(resolve, reject){
      coursesModel.findOneAndDelete({_id: id}, function(error, result){
        if(error){
          reject(error);
        }
        resolve(result);
      });
    });
  },

}

