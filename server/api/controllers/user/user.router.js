import * as express from 'express';
import multer from 'multer';
import userController from './user.controller';

const storage = multer.diskStorage({
  destination: `${__dirname}/uploads`,
  filename(req, file, cb) {
    cb(null, file.fieldname);
  },
});

const multerupload = multer({ storage });
export default express
  .Router()
  .post('/register', multerupload.any(), userController.createOne)
  .post('/login', userController.login)
  .put('/resetPassword', userController.resetPassword);
