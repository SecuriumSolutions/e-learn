/**
 *  @fileoverview delete user acc
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 17/9/20
 * @company securiumsolutions
 */

const dao = require('../../Dao/userDao.js');
const jwtUtil = require('../../utils/jwtUtil.js');


const profileDeleteUser = async function (request, response) {
    let userValid = request.query.userId;
    let userToken = headers.token;
    if (!userToken) {
      logger.error(`user token missing`);
      return reply.response(response.unAuthorized());
    }
    let jwtPayload = await jwtUtil.verify(userToken, config["jwt_secret"]);
    if (!jwtPayload) {
      return reply.response(response.tokenMismatch());
    }
    const userValid = await dao.deleteOne(docObjects,userValid);
    if (userValid) {
        await userValid.remove();
        response.send({ message: 'User Deleted successfully' });
      } else {
        response.status(404).send('Error in Deletion.');
      }

};

module.exports  = { profileDeleteUser};