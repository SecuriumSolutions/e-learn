/**
 *  @fileoverview  lecture dao  
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 10/9/20 ,11/9/20
 * @company securiumsolutions
 */

const usercourses = require("../models/usercourses");

 //create a lecture
 module.exports = {
 createlecture : function ( data){
    return new Promise (function (resolve, reject){
      coursesModel.createOne( data, function(err, result){
        if(err){
          reject(err);
        }
        resolve(result);
      });
    });
  },
  //update a lecture 
  updateLecture :  function ({_id: coursesId},query){
    return new Promise(function(resolve, reject){
      coursesModel.findByIdAndUpdate({_id: coursesId}, query, function(err, result){
        if(err){
          reject(err);
        }resolve(result);
      });
    });
  },
  //delete a lecture -------------query htani hah
  deleteLecture : function({_id:coursesId ,coursesId:lectureId}, query){
    return new Promise (function(resolve, reject){
      coursesModel.findyByIdAndDelete({_id:coursesId ,lectureId:lectureId}, query, function (err, result){
        if(err){
          reject(err);
        }resolve(result);
      });
    });
  },

}