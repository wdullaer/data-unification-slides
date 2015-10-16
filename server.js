// server.js
// Author: Wouter Dullaert (wouter.dullaert@toyota-europe.com)

// A2D API Endpoint.
// Provides API checks and proxies to elasticsearch

// Environment Variables
// PORT: port number on which the server will bind
// LOGGING_LEVEL: Verbosity of log messages to be shown
// ES_LOGGING_INSTANCE_PORT_9200_TCP_ADDR: optional IP of the logger ES
// ES_LOGGING_INSTANCE_PORT_9200_TCP_PORT: optional Port of the logger ES
// =============================================================================
'use strict';

// Import the packages we are going to use
var app = require('./app.js'); // Load the routes
var logger = require('./logger.js'); // Load the logging configuration

// Start the server
var server = app.listen(app.get('port'), function() {
    logger.info("Server started listening on port "+ app.get('port'));
});

// Handle SIGTERM gracefully
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
process.on('SIGHUP', gracefulShutdown);

function gracefulShutdown() {
  logger.warn("Received request to terminate: wrapping up existing requests");
  server.close(function(){
      // Exit once all existing requests have been served
      logger.warn("Received request to terminate: done serving existing requests. Exiting");
      process.exit(0);
  });
}
