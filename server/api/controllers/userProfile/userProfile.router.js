import express from 'express';
import userProfileController from './userProfile.controller';
import isAuthenticated from '../../../common/isAuthenticated';

export default express.Router()
  .post('/', isAuthenticated, userProfileController.createUserProfile)
  .get('/', isAuthenticated, userProfileController.getUserProfile)
  .put('/', isAuthenticated, userProfileController.updateUserProfile);
