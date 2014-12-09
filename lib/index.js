// Load modules

var Useragent = require('useragent');
require('useragent/features');                      // Enhances Useragent


// Declare internals

var internals = {};


exports.register = function (server, options, next) {

    server.ext('onRequest', internals.onRequest);
    return next();
};


exports.register.attributes = {
    pkg: require('../package.json')
};


internals.onRequest = function (request, reply) {

    request.plugins.scooter = Useragent.lookup(request.headers['user-agent']);
    return reply.continue();
};
