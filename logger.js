'use strict';

var logger = require('winston'); // Logger library

// Configure the winston logger
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
  level : process.env.LOGGING_LEVEL || 'info',
  timestamp : true
});

module.exports = logger;
