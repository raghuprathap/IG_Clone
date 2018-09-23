import express from 'express';

import commentController from './comment.controller';

export default express.Router()
  .post('/', commentController.saveComment)
  .get('/', commentController.getComments);
