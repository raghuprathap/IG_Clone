import userRouter from './api/controllers/user/user.router';
import postRouter from './api/controllers/Post/post.router';
import userProfileRouter from './api/controllers/userProfile/userProfile.router';
import commentRouter from './api/controllers/comment/comment.router';

export default function routes(app) {
  app.use('/api/v1/user', userRouter);
  app.use('/api/v1/post', postRouter);
  app.use('/api/v1/userProfile', userProfileRouter);
  app.use('/api/v1/comment', commentRouter);
}
