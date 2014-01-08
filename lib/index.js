// Load modules

var Hoek = require('hoek');
var Useragent = require('useragent');


// Declare internals

var internals = {};


exports.register = function (plugin, options, next) {

    plugin.ext('onRequest', internals.onRequest);

    next();
};


internals.onRequest = function (request, reply) {

    var agent = Useragent.lookup(request.raw.req.headers['user-agent']);
    request.plugins.scooter = agent;
    reply();
};
