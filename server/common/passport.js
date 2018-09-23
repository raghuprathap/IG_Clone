import passport from 'passport';
import passportLocal from 'passport-local';
import UserModel from '../api/controllers/user/user.model';
import bcrypt from 'bcrypt';

const LocalStrategy = passportLocal.Strategy;

const passportAuth = () => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
    ((userEmail, password, done) => {
      UserModel.findOne({ email: userEmail }, (err, user) => {
        if (err) {
          console.log('error');
          return done(err);
        }
        if (!user) {
          console.log('incorrect username');
          return done(null, false, { message: 'Incorrect username' });
        }
        console.log('USERRRR', user.password);
        console.log('USERRRR', password);
        bcrypt.compare(password, user.password).then(valid => {
          if (valid) {
            return done(null, user);
          }
          return done(null, false, { message: 'Incorrect password' });
        });
      });
    }),
  ));
};

export default passportAuth;
