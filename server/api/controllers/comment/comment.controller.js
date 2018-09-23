import commentDbService from './comment.db.service';

class CommentController {
  saveComment(req, res) {
    commentDbService.saveComment(req.body).then(doc => {
      res.status(201).json(doc);
    }).catch(error => {
      res.status(400).json(error);
    });
  }
  getComments(req, res) {
    commentDbService.getComments().then(comments => {
      res.status(200).json(comments);
    }).catch(error => {
      res.status(400).json(error);
    });
  }
}

export default new CommentController();
