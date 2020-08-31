import jwt from 'jsonwebtoken';

const authCheck = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(400).send('Access token missed');
  }
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, process.env.API_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).send('token is not valid');
    } else {
      next();
    }
  });
};

export default authCheck;
