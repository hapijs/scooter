'use strict';

// Load modules

const Code = require('code');
const Lab = require('lab');
const Hapi = require('hapi');
const Scooter = require('../');


// Declare internals

const internals = {};


// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;


describe('scooter', () => {

    it('parses and sets user-agent information for an incoming request', async () => {

        const server = new Hapi.Server();
        server.route({ method: 'GET', path: '/', handler: (request, h) => {

            return request.plugins.scooter.os.family;
        } });

        await server.register(Scooter);

        server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3' } }, (res) => {

            expect(res.result).to.equal('iOS');
        });
    });
});
