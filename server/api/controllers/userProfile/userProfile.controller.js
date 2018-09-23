import userProfileDBService from './userProfile.db.service';

class UserProfileController {
  createUserProfile(req, res) {
    userProfileDBService.createUserProfile(req.body).then(doc => {
      res.status(201).json(doc);
    }).catch(error => {
      res.status(400).json(error);
    });
  }
  getUserProfile(req, res) {
    userProfileDBService.getUserProfile(req.body).then(doc => {
      res.status(200).json(doc);
    }).catch(error => {
      res.status(400).json(error);
    });
  }
  updateUserProfile(req, res) {
    userProfileDBService.updateUserProfile(req.body).then(doc => {
      res.status(200).json(doc);
    }).catch(error => {
      res.status(400).json(error);
    });
  }
}

export default new UserProfileController();
