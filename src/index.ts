import config from "./config/vars";
import logger from "./config/logger";
import app from "./config/express";
import * as mongoose from "./config/mongoose";

// open mongoose connection
mongoose.connect();

// listen to requests
app.listen(config.port, () =>
  logger.info(`server started on port ${config.port} (${config.env})`)
);

module.exports = app;
