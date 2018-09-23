import bcrypt from 'bcrypt';

import userModel from './user.model';

const SALT_WORK_FACTOR = 10;

class UserDBService {
  createUser(doc) {
    return userModel.create(doc);
  }

  updateUserPassword(body) {
    console.log('Body', body);
    const { email, newPassword } = body;
    const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
    const hashashedPassword = bcrypt.hashSync(newPassword, salt);
    return userModel.findOneAndUpdate(
      { email },
      { password: hashashedPassword },
    );
  }
}

export default new UserDBService();
