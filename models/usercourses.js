/**
 *  @fileoverview UserCourses collection
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 18/9/20, 19/9/20
 * @company securiumsolutions
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userCoursesSchema = new Schema ({
    userId:{
        type: String, 
        required: true
    },
    coursesId: {
        type: String,
        required: true
    },
    adminId:{
        type: String,
        required: true
    },
    billId:{
        type: String,
        required: true
    },
    paymentdetailsId:{
        type: String,
        required:true
    },
    coupanId:{
        type: String,
    },
    purchaseId:{
        type: String,
        required: true
    }
},
{
    timestamps: true
  },);

module.exports = mongoose.model('usercourses', userCoursesSchema);