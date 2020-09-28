const { query } = require('express');
/**
 *  @fileoverview All courses list
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 12/9/20, 17/9/2020 (underr processs)
 * @company securiumsolutions
 */
const dao = require('../../Dao/adminDao.js');

//show all course list
const courseList = async function (request, response)  {
    const { body } = request;
    if (!body.courses_name) {
      console.log('body parameters missing');
      return response.params_missing();
    }
    courseModel.find((err, docs)=>{
        if(!err){
            res.status(200).send("course controller");
        }else{
            res.status(404).send("Erorr");
            res.render("list", {data : docs});
        }
    });
};
//admin create a course
    const adminCreateCourse = async function (request, response){
        const { data } = request;
        if (!data.courses_name || !data.courses_duration || !data.payment || !data.img || !data.upload_video || !data.author || !data.description ) {
            console.log('body parameters missing');
            return response.params_missing();
          }
          let docObject = {
            courses_name: data.courses_name,
            courses_duration: data.courses_duration,
            payment: data.payment,
            img: data.img,
            upload_video: data.upload_video,
            author: data.author,
            description:data.description,
          };
          const createCourse = await dao.createOne(docObject);
          if(!createCourse){
              console.log('Error in create coures');
              return response.db_error();
          };
          return response.status(201).success('create course sucessfully');
  };
//admin update a course
const adminUpdateCourse = async function (request, response){
    const userId = request.query.userId;
       let courses = {}; 
       courses.courses_name= request.body.courses_name;
       courses.courses_duration= request.body.courses_duration;
       courses.payment = request.body.payment;
       courses.img= request.body.img;
       courses.upload_video = request.body.upload_video;
       courses.author= request.body.author;
       courses.description= request.body.description;

      
    
    const UpdateCourse = await dao.updateOne({userId: userId},courses);
     if(UpdateCourse) {
         return response.status(200).success('update course sucessfully');
     } return response.status(500).send(' Error in Updating course.');

 };
 //admin find user
 const adminFindUSer = async function (request, response){
     let data = request.query;
     const findUser = await dao.findUser(data);
     if(findUser){
         return response.status(302).success('sucessfuly find a user');
     }return response.status(404).send('not found');
 };

 //admin delete courses

 const adminDeleteCourses = async function (request ,response){
     let courseId = request.query;
     let  adminId = request.query.adminId;
     const deleteAdminCourses = await dao.adminDeleteCourses({coursesId: courseId, adminId: adminId} );
     if(deleteAdminCourses){
         return response.success('Delete a courses sucessfully');
     }return response.send('Not found');

 }

module.exports = { courseList,adminCreateCourse, adminUpdateCourse, adminFindUSer,  adminDeleteCourses };