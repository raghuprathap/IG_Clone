import commentModel from './comment.model';

class CommentDBService {
  saveComment(body) {
    const commentDocToSave = body;
    return commentModel.create(commentDocToSave);
  }
  getComments() {
    return commentModel.find({});
  }
}

export default new CommentDBService();
