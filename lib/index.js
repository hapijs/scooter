'use strict';

// Load modules

const Useragent = require('useragent');
require('useragent/features');                      // Enhances Useragent


// Declare internals

const internals = {};


exports.register = async function (server, options) {

    await server.ext('onRequest', internals.onRequest);
};


exports.register.attributes = {
    pkg: require('../package.json')
};


exports.name = 'scooter';


internals.onRequest = function (request, h) {

    request.plugins.scooter = Useragent.lookup(request.headers['user-agent']);
    return h.continue;
};
