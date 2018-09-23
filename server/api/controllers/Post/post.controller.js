import postDBService from './post.db.service';

class PostController {
  createPost(req, res) {
    const postDocument = req.body;
    postDBService.createPost(postDocument).then(doc => {
      res.status(201).json(doc);
    }).catch(error => {
      res.status(500).json(error);
    });
  }
  deletePost(req, res) {
    postDBService.removePost(req.body).then(doc => {
      res.status(200).json(doc);
    }).catch(error => {
      res.status(400).json(error);
    });
  }
  getAllPosts(req, res) {
    postDBService.retrievePosts().then(docs => {
      res.status(200).json(docs);
    }).catch(error => {
      res.status(404).json(error);
    });
  }
}

export default new PostController();

