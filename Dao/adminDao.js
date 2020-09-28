const coursesModel = require('./models/courses.js');
module.exports = {
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
//UPDATES admin IN THE course
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
adminDeleteCourses: function({coursesId:courcesId, adminId:adminId}){
  return new Promise (function(resolve, reject){
    usercoursesModel.findOneAndDelete({coursesId:courcesId, adminId:adminId}, function(error, result){
      if(error){
        reject(error);
      }
      resolve(result);
    });
  });
},
//admin find a user
findUser: function(query){
    return new Promise (function (resolve, reject){
      userModel.findAll(query, function(err, result){
        if(err){
          reject(err);
        }
        resolve(result);
      });
    });
},
//admin all information for like billing and buy cources and over all access
find: function (query){
  return new Promise (function (resolve, reject){
    usercourses.find(query, function(err, result){
      if (err){
        reject(err);

      }resolve(result);
    })
  })
}

}