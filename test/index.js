// Load modules

var Chai = require('chai');
var Hapi = require('hapi');
var Scooter = process.env.TEST_COV ? require('../lib-cov') : require('../lib');


// Declare internals

var internals = {};


// Test shortcuts

var expect = Chai.expect;


describe('Scooter', function () {

    // Wrapper is required for coverage

    var plugin = {
        name: 'scooter',
        version: Hapi.utils.loadPackage().version,
        hapi: {
            plugin: '1.x.x'
        },
        register: Scooter.register
    };

    it('parses and sets user-agent information for an incoming request', function (done) {

        var options = {
            permissions: {
                ext: true
            }
        };

        var server = new Hapi.Server();

        server.plugin().register(plugin, options, function (err) {

            expect(err).to.not.exist;
            server.inject({ method: 'GET', url: '/no-found' }, function (res) {

                done();
            });
        });
    });
});


