import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  comment: { type: String },
  user_id: { type: String },
  likes: { type: mongoose.Schema.Types.ObjectId, ref: 'Like' },
  date_created: { type: String },
});
const CommentModel = mongoose.model('CommentSchema', commentSchema);

export default CommentModel;
