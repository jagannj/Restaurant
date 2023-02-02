const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    if ( decoded.isAdmin) {
      return next();
    }
    return res.status(400).send("You don't have admin access")
  };
  
module.exports={adminAuth}
