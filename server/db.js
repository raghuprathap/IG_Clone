import mongoose from 'mongoose';
import logger from './common/logger';

mongoose.Promise = global.Promise;

const connect = () =>
  mongoose
    .connect(
    //   `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${
    //     process.env.DB_HOST
    //   }:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    )
    .then(
      () => {
        logger.info('successfully connected to Mongo DB');
      },
      err => {
        logger.info(`Connection establish error ${err}`);
      },
    );

export default connect;
