import postModel from './post.model';

class PostDBService {
  createPost(post) {
    return postModel.create(post);
  }
  removePost(body) {
    postModel.deleteOne({ post_id: body.post_id });
  }
  retrievePosts() {
    return postModel.find({});
  }
  updatePost() {

  }
}

export default new PostDBService();
