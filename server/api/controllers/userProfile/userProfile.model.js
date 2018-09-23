import mongoose from 'mongoose';

const UserProfileSchema = new mongoose.Schema({
  description: { type: String },
  display_name: { type: String },
  followers: { type: Number },
  following: { type: Number },
  posts: { type: Number },
  profile_photo: { data: Buffer, contentType: String },
  username: { type: String },
  website: { type: String },
  user_id: { type: String },
});

const userProfileModel = mongoose.model('userProfileModel', UserProfileSchema);
export default userProfileModel;
