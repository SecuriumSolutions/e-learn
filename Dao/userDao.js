const coursesModel = require('../models/courses.js');
const userModel = require('./models/user.js');
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
  //find user 
  find: function (query ){
    return new Promise(function (resolve, reject){
      userModel.find(query, function(err, result){
        if (err){
          reject(err);
        }resolve(result);
      });
    });
  },
  //user create a courses
  createCourses: function (data){
    return new Promise (function (resolve, reject){
      coursesModel.create(data, function(err, result){
        if(err){
          reject(err);
        }resolve(result);
      });
    });
  },
  //user update a courses working
  UpdateCourses: function (query, courses){
    return new Promise (function(resolve, reject){
      usercoursesModel.update(query,courses, function(err, result){
        if(err){
          reject(err);

        }resolve(result);
      });
    });
  },
  // user delete a courses 
  deleteCourses: function({ coursesId:coursesId}, query){
    return new Promise (function(resolve, reject){
      usercoursesModel.deleteOne({coursesId: coursesId}, query, function(err,result){
        if (err){
          reject(err);
        }resolve(result);
      });
    });
  },
  //user find a Courses
  findCourses: function(query){
    return new Promise (function (resolve, reject){
      coursesModel.findOne(query,  function(err, result){
        if(err){
          reject(err);
        }resolve(result);
      });
    });
  },
}