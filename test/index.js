'use strict';

const Code = require('code');
const Lab = require('lab');
const Hapi = require('hapi');
const Scooter = require('../');


const internals = {};


const { it, describe } = exports.lab = Lab.script();
const expect = Code.expect;


describe('scooter', () => {

    it('parses and sets user-agent information for an incoming request', async () => {

        const server = new Hapi.Server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter.os.family });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3' } });
        expect(res.result).to.equal('iOS');
    });
});
