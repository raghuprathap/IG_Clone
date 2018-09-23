import userProfileModel from './userProfile.model'
  ;

class UserProfileDBService {
  createUserProfile(userProfile) {
    return userProfileModel.create(userProfile);
  }
  getUserProfile(userID) {
    return userProfileModel.findOne({ user_id: userID });
  }
  updateUserProfile(userProfileToUpdate) {
    return userProfileModel.findOneAndUpdate({ user_id: userProfileToUpdate.user_id }, userProfileToUpdate);
  }
}

export default new UserProfileDBService();
