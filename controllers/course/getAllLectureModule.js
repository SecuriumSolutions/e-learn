const { Query } = require('accesscontrol');
const { deleteOne } = require('../../Dao/adminDao');
/**
 *  @fileoverview All functionlty lectures
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 26/9/2020
 * @company securiumsolutions
 */

 const dao = require('../../Dao/lectureDao');
const { model } = require('../../models/courses');

 //create a lecture 
 const getLecture = async function (request, response){
     const {data} = request;
    if (!data.courses_name || !data.courses_duration || !data.payment || !data.upload_video || !data.author || !data.description ) {
        console.log('body parameters missing');
        return response.params_missing();
      }
      let docLectures = {
        courses_name: data.courses_name,
        courses_duration: data.courses_duration,
        payment: data.payment,
        upload_video: data.upload_video,
        author: data.author,
        description:data.description,
      };
      const createLect = await dao.createlecture(docLectures);
          if(!createlecture){
              console.log('Error in create coures');
              return response.db_error();
          };
          return response.status(201).success('create course sucessfully');
 };
 //update a lecture 

 const seveUpdateLecture = async function (request, response){
    let coursesId = request.coursesId;
    let courses = {}; 
       courses.courses_name= request.body.courses_name;
       courses.courses_duration= request.body.courses_duration;
       courses.payment = request.body.payment;
       courses.img= request.body.img;
       courses.upload_video = request.body.upload_video;
       courses.author= request.body.author;
       courses.description= request.body.description;
       const updateCourse = await dao.updateLecture({_id: coursesId},courses);
       if(updateCourse) {
           return response.status(200).success('update course sucessfully');
       } return response.status(500).send(' Error in Updating course.');
  
   };

   //delete a lecture true
   const deleteLecture =async function (request, response){
      let coursesId = request.query.coursesId;
      let lectureId = request.query.lectureId;
       const deleteLectures = await dao.deleteLecture({_id:coursesId, lectureId:lectureId});
       if(deleteLectures){
        return response.status(200).success('update course sucessfully');
       }return response.status(500).send(' Error in Updating course.');
   }

 
 module.exports = { getLecture, seveUpdateLecture , deleteLecture }