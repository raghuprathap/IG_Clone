import express from 'express';
import postController from './post.controller';
import isAuthenticated from '../../../common/isAuthenticated';

export default express.Router()
  .post('/', isAuthenticated, postController.createPost)
  .get('/', isAuthenticated, postController.getAllPosts)
  .delete('/', isAuthenticated, postController.deletePost);

