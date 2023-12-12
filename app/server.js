import http from 'http';
import mongoose, { connect } from 'mongoose';

// mongoose.set('debug', true);

import { DBURI, PORT } from './config.js';
import app from './app.js';
import logger from './utils/logger.js';

console.log("bd :: ",DBURI)
const server = http.createServer(app);
connect(DBURI)
  .then(() => {
    logger.info('DB connection successful 🔗🔗');
  })
  .catch((err) => {
    logger.error('Error:', err);
    process.exit(1);
  });

server.listen(PORT, () => {
  logger.info(`server listening on port ${PORT} 🚀🚀`);
});

server.on('error', (error) => {
  logger.error('Error: ', error);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  logger.error('unhandledRejection');
  logger.error('Error:', err);
  process.exit(1);
});

export default server;
