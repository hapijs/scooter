'use strict';

// Load modules

const Useragent = require('useragent');
require('useragent/features');                      // Enhances Useragent


// Declare internals

const internals = {};


exports.register = function (server, options) {

    server.ext('onRequest', internals.onRequest);
};

exports.pkg = require('../package.json');


internals.onRequest = function (request, h) {

    request.plugins.scooter = Useragent.lookup(request.headers['user-agent']);
    return h.continue;
};
