import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;
const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    // required: [true, 'user must have user_id'],
  },
  phone_number: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'user must have email'],
  },
  profile_pic: {
    data: Buffer,
    contentType: String,
  },
  password: {
    type: String,
  },
  username: {
    type: String,
  },
});

userSchema.pre('save', function (next) {
  const user = this;
  console.log('User', this);
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});


const User = mongoose.model('user', userSchema);

export default User;
