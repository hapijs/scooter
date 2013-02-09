// Load modules

var Hoek = require('hoek');


// Declare internals

var internals = {};

internals.config = {
};


exports.register = function (pack, options, next) {

    Hoek.merge(internals.config, options);

    pack.ext('onRequest', internals.onRequest);

    next();
};


internals.onRequest = function (request, next) {

    next();
};
