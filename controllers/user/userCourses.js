/**
 *  @fileoverview User courses Create 
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 22/9/20
 * @company securiumsolutions
 */

const { query } = require("express");

 //user create a Api

 const userCreateCourse = async  function (request, response){
    let {data} = request;
    if(!data.courses_name || data.courses_duration || data.payment || data.img || data.upload_video || data.author || data.description || data.updated_date){
        console.log('body parameters  missing')
    return response.params_missing();
    };
    let docObject = {
        courses_name: data.courses_name,
        courses_duration: data.courses_duration,
        payment: data.payment,
        img: data.img,
        upload_video: data.upload_video,
        author: data.author,
        description:data.description,
      };
      const createCourse = await dao.create(docObject);
          if(!createCourse){
              console.log('Error in create coures');
              return response.db_error();
          };
          return response.status(201).success('create course sucessfully');
    
 };
 // user update courses 
 const userUpdateCourse = async function (request, response){
     let coursesId = request.query.coursesId;
     let userId = request.query.userId;

     let courses = {}; 
     courses.courses_name= request.body.courses_name;
     courses.courses_duration= request.body.courses_duration;
     courses.payment = request.body.payment;
     courses.img= request.body.img;
     courses.upload_video = request.body.upload_video;
     courses.author= request.body.author;
     courses.description= request.body.description;

     const userUpdateCourses = await dao.updateCourses({coursesId:coursesId,userId:userId},courses );
     if(userUpdateCourses) {
        return response.status(200).success('update course sucessfully');
    } return response.status(500).send(' Error in Updating course.');

 };
 // user delete courses
 const userCoursesDelete = async function (request, response){
     let coursesId = request.query.coursesId;
     let userId = request.query.userId;
     
     const userDeleteCourses = await dao.deleteCourses({coursesId:coursesId,userId: userId});
     if(userDeleteCourses){
         return response.status(200).success('Delete SuccessFull coursess');

     }return response.status(204).send('No content');
 };

 //user find Courses 
 const userCoursesFind = async function (request, response){
     let coursesName = request.query.courses_name;
     let description = request.query.description;

     const userFindCourses = await dao.findCourses({courses_name: coursesName, description:description});
     if(userFindCourses){
         return response.status(200).success('sucessfully Courses Find');
     } return response.status(404).send('Not found Courses');


 }

 module.exports ={
     userCreateCourse,
     userUpdateCourse,
     userCoursesDelete,
     userCoursesFind
 }