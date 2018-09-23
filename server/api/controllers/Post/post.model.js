import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  user_id: { type: String },
  timestamp: { type: String },
  image_url: { type: String },
  video_url: { type: String },
  post_id: { type: String },
  views: { type: String },
  duration: { type: String },
});

const Post = mongoose.model('Post', PostSchema);

export default Post;
