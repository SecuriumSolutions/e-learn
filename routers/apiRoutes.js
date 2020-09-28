import { request } from 'express';
/**
 *  @fileoverview All API to add 
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 12/9/20
 * @company securiumsolutions
 */
import {isAdmin, isAuth} from '../utils/jwtUtil';

const userLoginController = require('../controllers/session/loginModule');
const userSingupController = require('../controllers/session/signupModule');
const courseController = require('../controllers/course/getAllCoursesModules');
const userUpdateController = require('../controllers/user/updateUserModules');
const userDeleteController = require('../controllers/user/deleteuser.js');
const userCreateCourseController = require('../controllers/course/getAllCoursesModules.js');
const userUpdateCourseController = require('../controllers/course/getAllCoursesModules.js');
const adminFindcontroller = require('../controllers/course/getAllCoursesModules.js');
const adminGetInformation = require('../controllers/admin/getFullAdmin.js');
const getUserProfilesController = require('../controllers/user/getProfilesModule.js');
const postUserCreateCoursesController = require('../controllers/user/userCourses.js');
const deleteUserCoursesController = require('../controllers/user/userCourses.js');
const userUpdateCoursesController = require('../controllers/user/userCourses.js');
const getUserCoursesFindController = require('../controllers/user/userCourses.js');
const userChangePasswordController = require('../controllers/user/changePasswordModule.js');
const saveAccessibilityPolicyController = require('../controllers/policies/saveAccessibilityModule.js');
const getAccessibilityPolicyController = require('../controllers/policies/getAccessibilityModule.js');
const adminDeleteCoursesController = require('../controllers/course/getAllCoursesModules.js');
const getDataSubProcessorsController = require('../controllers/policies/getDataSubProcessorsModule.js');
const saveDataSubProcessorsController = require('../controllers/policies/saveDataSubProcessorsModule.js');
const getPrivacyPolicyController = require('../controllers/policies/getPrivacyPolicyModules');
const savePrivacyPolicyController = require('../controllers/policies/savePrivacyPolicyModule');
const getRefundPolicyController =require('../controllers/policies/getRefundPolicyModules');
const saveRefundPolicyController = require('../controllers/policies/saveRefundPolicyModule');
const getReschedulingPolicyController = require('../controllers/policies/getReschedulingPolicyModule');
const saveReschedulingPolicyController =require('../controllers/policies/saveReschedulingPolicyModule');
const getTermsAndConditionsController = require('../controllers/policies/getTermsAndConditionsModule');
const saveTermsAndConditionsController = require('../controllers/policies/saveTermsAndConditiosModule');
module.exports = (app, express) => {

  const apiRoute = express.Router();
  // login user
  apiRoute.post('/user/login', userLoginController.userLogin);
  //  create ,register user
  apiRoute.post('/singup', userSingupController.userSignup);
  //Read all course list
  apiRoute.get('/coursess', courseController.courseList);
  // Change-password api
  apiRoute.put('/user/change-password',  userChangePasswordController.changePassword)
  //admin create a course
  apiRoute.post('/adminId/createcourse', isAuth,isAdmin, userCreateCourseController.adminCreateCourse);
 // Admin Delete Courses All
 apiRoute.delete('/admin/courses', isAdmin,isAuth, adminDeleteCoursesController.adminDeleteCourses)
 // admin update a course
 apiRoute.put('user/updatecourse', isAdmin,isAuth, userUpdateCourseController.adminUpdateCourse);
 
  //read one
  apiRoute.get('/:id',)
  
  //admin  search user 
  apiRoute.get('/fname/', adminFindcontroller.adminFindUSer);

  //admin get a full information in billing and and pursvhess overa all
  apiRoute.get('/allinformation', adminGetInformation.userInformation);
  
  //update user  
  apiRoute.put('/:id',isAuth, userUpdateController.profileUpdateUser);

  //delete request user
  apiRoute.delete('/:id', isAuth,isAdmin, userDeleteController.profileDeleteUser);

  //get profile user 
  apiRoute.get('/userId/', isAuth, getUserProfilesController.getUserProfiles);

  // user create a courses api
  apiRoute.post('/user/createCourse', postUserCreateCoursesController.userCreateCourse);

  //user delete coursess api
  apiRoute.delete('/coursesId', deleteUserCoursesController.userCoursesDelete);
  
  //user update coursess api 
  apiRoute.put('/userId/coursesId', userUpdateCoursesController.userUpdateCourse);

  //user find Courses api 
  apiRoute.get('/userId/coursesName', getUserCoursesFindController.userCoursesFind);

  //Accessibility-policy  Save
  apiRoute.post('/accessibility-policy', saveAccessibilityPolicyController.saveAccessibilityPolicy);

  // create Accessibility-policy
  apiRoute.get('/accessibility-policy',getAccessibilityPolicyController.getAccessibilityPolicy );

  //create Data Sub Processor Policy api
  apiRoute.get('/data-subprocessor', getDataSubProcessorsController.getDataSubProcessors);

  //save Data Sub Processor Policy api
  apiRoute.post('/data-subprocessor', saveDataSubProcessorsController.saveDataSubProcessors);

  //create privacy policy api
  apiRoute.get('/privacy-policy', getPrivacyPolicyController.getPrivatePolicy);

  // privacy policy save api 
  apiRoute.post('/privacy-policy' , savePrivacyPolicyController.savePrivacyPolicy);

  //create getRefundPolicy api
  apiRoute.get('/refund-policy', getRefundPolicyController.getRefundPolicy);

  //save refund policy api
  apiRoute.post('/refund-policy', saveRefundPolicyController.saveRefundPolicy);

  //create get Rescheduling Policy api
  apiRoute.get('/rescheduling-policy', getReschedulingPolicyController.getReschedulingPolicy);

  //save Rescheduling Policy api
  apiRoute.post('/rescheduling-policy', saveReschedulingPolicyController.saveReschedulingPolicy);

  //create get get Terms And Conditions api
  apiRoute.get('/get-terms-and-conditions', getTermsAndConditionsController.getTermsAndConditions);

  //Save Terms And Conditions Api
  apiRoute.post('/get-terms-and-conditions', saveTermsAndConditionsController.saveTermsAndConditions);

    return apiRoute;
};