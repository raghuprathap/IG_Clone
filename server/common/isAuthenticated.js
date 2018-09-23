import { unix } from 'moment';
import jwt from 'jsonwebtoken';


const isAuthenticated = (req, res, next) => {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).send({
      message: 'You did not provide a JSOn Web Token in the Authorization header.',
    });
  }

  const header = req.headers.authorization.split(' ');
  const token = header[1];
  const payload = jwt.decode(token, process.env.APP_SECRECT);
  const now = unix();

  if (now > payload.exp) {
    return res.status(401).send({
      message: 'Token has expired.',
    });
  }

  User.findById(payload.sub, (err, user) => {
    if (!user) {
      return res.status(400).send({ message: 'User no longer exists.' });
    }

    req.user = user;
    next();
  });
};

export default isAuthenticated;
