/**
 *  @fileoverview courses related collection and lecture
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 10/9/20 ,11/9/20
 * @company securiumsolutions
 */
const mongoose = require('mongoose');
const Schema=  mongoose.Schema;

const CoursesSchema = new Schema({
    courses_name: {
        type: String,
        require: true
    },
    courses_duration: {
            type: String,
    },
    courses_id:{
        type:String
    },
    payment:{
        type: String,
        require: true
    },
    feedback:{
        type: String,
        require: true
    },
    img: { 
        data: Buffer, 
        contentType: String 
    },
    upload_video:{
        type: String,
        require: true
    },
    author: {
        type: String,
        required: true
      },
    description: {
        type: String
      },
    publisher: {
        type: String
      },
     
    courses_fee: {
        type: String
    },
    user_id:{
        type:String,
        required:true
    },
    lectureId:{
        type: Array
    }


},  {
    timestamps: true
  },)
module.exports = mongoose.model('courses', CoursesSchema);