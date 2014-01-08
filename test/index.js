// Load modules

var Lab = require('lab');
var Hapi = require('hapi');
var Scooter = require('../');


// Declare internals

var internals = {};


// Test shortcuts

var expect = Lab.expect;
var before = Lab.before;
var after = Lab.after;
var describe = Lab.experiment;
var it = Lab.test;


describe('Scooter', function () {

    it('parses and sets user-agent information for an incoming request', function (done) {

        var server = new Hapi.Server();
        server.route({method: 'GET', path: '/', handler: function (request, reply) {

            return reply(request.plugins.scooter.os.family);
        }});

        server.pack.require('../', function (err) {

            expect(err).to.not.exist;
            server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3' } }, function (res) {

                expect(res.result).to.equal('iOS');
                done();
            });
        });
    });
});


