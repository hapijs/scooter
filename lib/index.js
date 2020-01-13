'use strict';

const Useragent = require('useragent');

require('useragent/features');                      // Enhances Useragent


const internals = {};


exports.plugin = {
    pkg: require('../package.json'),
    requirements: {
        hapi: '>=18.4.0'
    },
    register: function (server, options) {

        server.ext('onRequest', internals.onRequest);
    }
};


internals.onRequest = function (request, h) {

    request.plugins.scooter = Useragent.lookup(request.headers['user-agent']);
    return h.continue;
};
