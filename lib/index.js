'use strict';

// Load modules

const Useragent = require('useragent');
require('useragent/features');                      // Enhances Useragent


// Declare internals

const internals = {};


exports.register = (server, options, next) => {

    server.ext('onRequest', internals.onRequest);
    return next();
};


exports.register.attributes = {
    pkg: require('../package.json')
};


internals.onRequest = (request, reply) => {

    request.plugins.scooter = Useragent.lookup(request.headers['user-agent']);
    return reply.continue();
};
