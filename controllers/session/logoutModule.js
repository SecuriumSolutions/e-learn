/**
 *  @fileoverview User logout model
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 15/9/20
 * @company securiumsolutions
 */


 const userLogOut = async function (req, res, next) {
    req.session.userLogin=false;
    res.redirect('/');
    next();
  };
   
//   app.use('/',checkUser, index);
//   //  Login Work Start End
//   app.use('/users', users);
  module.exports = { userLogOut };