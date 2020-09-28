/**
 *  @fileoverview All Access token
 * @author nitin@securiumsolutions.com (Nitin Kumar)
 * @created on 17/9/20
 * @company securiumsolutions
 */
import jwt from 'jsonwebtoken';
import config from './appConfig';
const getToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    config.JWT_SECRET,
    {
      expiresIn: '48h',
    }
  );
};
const isAuth = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (token) {
      const onlyToken = token.slice(7, token.length);
      jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
        if (err) {
          return res.status(401).send({ message: 'Invalid Token' });
        }
        req.user = decode;
        next();
        return;
      });
    } else {
      return res.status(401).send({ message: 'Token is not supplied.' });
    }
  };
  
  const isAdmin = (req, res, next) => {
    console.log(req.user);
    if (req.user && req.user.isAdmin) {
      return next();
    }
    return res.status(401).send({ message: 'Admin Token is not valid.' });
  };
  const isSeller = (req, res, next) => {
    if (req.user && req.user.isSeller) {
      return next();
    }
    return res.status(401).send({ message: 'Invalid Seller Token' });
  };
  
export{
    getToken,
    isAuth,
    isAdmin,
    isSeller
}