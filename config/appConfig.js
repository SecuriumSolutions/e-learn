/**
 *  @fileoverview config all port includes this
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 12/9/20
 * @company securiumsolutions
 */
// import dotenv from 'dotenv';

// dotenv.config();

// export default {
//   PORT: process.env.PORT || 5000,
//   MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/elearing',
//   JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
//   PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
//   accessKeyId: process.env.accessKeyId || 'accessKeyId',
//   secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
// };

module.exports ={
  port: 5000,
  jwt:{
    secretKey: 'Demo'
  }
}