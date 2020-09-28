/**
 *  @fileoverview Update user
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 15/9/20
 * @company securiumsolutions
 */

 

 const profileUpdateUser = async function (req, res){
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
      user.fname = req.body.fname || user.fname;
      user.lname = req.body.lname || user.lname
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser.id,
        fname: updatedUser.fname,
        lname: updatedUser.lname,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: getToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
 } 
 module.exports = {profileUpdateUser};