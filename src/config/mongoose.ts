import mongoose from "mongoose";
import logger from "./../config/logger";
import config from "./vars";

// Exit application on error
mongoose.connection.on("error", err => {
  logger.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// print mongoose logs in dev env
if (config.env === "development") {
  mongoose.set("debug", true);
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
export const connect = () => {
  mongoose.connect(config.mongo.uri, {
    keepAlive: true,
    useNewUrlParser: true
  });
  return mongoose.connection;
};
