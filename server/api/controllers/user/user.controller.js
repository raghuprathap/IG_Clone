import passport from 'passport';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import UserDBService from './user.db.service';
import UserModel from './user.model';

export class Controller {
  createOne(req, res) {
    UserDBService.createUser(req.body)
      .then(doc => {
        res.status(201).json(doc);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  }
  login(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: info ? info.message : 'Login failed',
          user,
        });
      }
      req.login(user, err => {
        if (err) {
          res.send(err);
        }
        const token = jwt.sign({ userId: user.user_id }, process.env.APP_SECRECT, {
          expiresIn: '1d',
        });
        return res.status(200).json({ token });
      });
    })(req, res, next);
  }
  resetPassword(req, res) {
    UserDBService.updateUserPassword(req.body).then(doc => {
      console.log('updated document from DB', doc);
      res.status(200).json(doc);
    }).catch(error => {
      res.status(500).json(error);
    });
  }
}
export default new Controller();
