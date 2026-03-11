'use strict';

const Useragent = require('my-ua-parser');

const internals = {};


internals.parseVersion = function (version, index) {

    if (!version) {
        return '0';
    }

    const parts = version.split('.');
    return parts[index] || '0';
};


internals.parseUserAgent = function (userAgentString) {

    const result = Useragent(userAgentString || '');

    return {
        family: result.browser.name || 'Other',
        major: internals.parseVersion(result.browser.version, 0),
        minor: internals.parseVersion(result.browser.version, 1),
        patch: internals.parseVersion(result.browser.version, 2),
        source: userAgentString,
        os: {
            family: result.os.name || 'Other',
            major: internals.parseVersion(result.os.version, 0),
            minor: internals.parseVersion(result.os.version, 1),
            patch: internals.parseVersion(result.os.version, 2)
        },
        device: {
            family: result.device.model || result.device.type || 'Other',
            brand: result.device.vendor,
            model: result.device.model
        }
    };
};


exports.plugin = {
    pkg: require('../package.json'),
    once: true,
    requirements: {
        hapi: '>=20.0.0'
    },
    register: function (server, options) {

        server.ext('onRequest', internals.onRequest);
    }
};


internals.onRequest = function (request, h) {

    request.plugins.scooter = internals.parseUserAgent(request.headers['user-agent']);
    return h.continue;
};
