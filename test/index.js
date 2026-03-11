'use strict';

const Code = require('@hapi/code');
const Hapi = require('@hapi/hapi');
const Lab = require('@hapi/lab');
const Scooter = require('..');


const internals = {};


const { it, describe } = exports.lab = Lab.script();
const expect = Code.expect;


describe('scooter', () => {

    it('may be registered multiple times', async () => {

        const server = Hapi.server();
        await server.register(Scooter);
        await expect(server.register(Scooter)).not.to.reject();
    });

    it('parses and sets user-agent information for an incoming request', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter.os.family });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3' } });
        expect(res.result).to.equal('iOS');
    });

    it('parses browser family from user-agent string', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } });
        expect(res.result.family).to.equal('Chrome');
    });

    it('parses browser major version from user-agent string', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } });
        expect(res.result.major).to.equal('91');
    });

    it('parses browser minor version from user-agent string', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } });
        expect(res.result.minor).to.equal('0');
    });

    it('parses browser patch version from user-agent string', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } });
        expect(res.result.patch).to.equal('4472');
    });

    it('includes source user-agent string in result', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';
        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': userAgent } });
        expect(res.result.source).to.equal(userAgent);
    });

    it('parses OS family from user-agent string', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } });
        expect(res.result.os.family).to.equal('Windows');
    });

    it('parses OS major version from user-agent string', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } });
        expect(res.result.os.major).to.equal('10');
    });

    it('parses OS minor version from user-agent string', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } });
        expect(res.result.os.minor).to.equal('0');
    });

    it('parses OS patch version from user-agent string', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } });
        expect(res.result.os.patch).to.equal('0');
    });

    it('parses device family from user-agent string', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15' } });
        expect(res.result.device.family).to.equal('iPhone');
    });

    it('parses device brand from user-agent string', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36' } });
        expect(res.result.device.brand).to.equal('Samsung');
    });

    it('parses device model from user-agent string', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36' } });
        expect(res.result.device.model).to.equal('SM-G973F');
    });

    it('handles user-agent with missing browser information', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': '' } });
        expect(res.result.family).to.equal('Other');
        expect(res.result.major).to.equal('0');
        expect(res.result.minor).to.equal('0');
        expect(res.result.patch).to.equal('0');
    });

    it('handles user-agent with missing OS information', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': '' } });
        expect(res.result.os.family).to.equal('Other');
        expect(res.result.os.major).to.equal('0');
        expect(res.result.os.minor).to.equal('0');
        expect(res.result.os.patch).to.equal('0');
    });

    it('handles user-agent with missing device information', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0' } });
        expect(res.result.device.family).to.equal('Other');
        expect(res.result.device.brand).to.be.undefined();
        expect(res.result.device.model).to.be.undefined();
    });

    it('parses device type when model is unavailable', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36' } });
        expect(res.result.device.family).to.exist();
    });

    it('handles missing user-agent header', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/' });
        expect(res.result.family).to.equal('Other');
        expect(res.result.major).to.equal('0');
    });

    it('handles browser version with only major version', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)' } });
        expect(res.result.major).to.exist();
        expect(res.result.minor).to.equal('0');
        expect(res.result.patch).to.equal('0');
    });

    it('parses Firefox user-agent with complete version information', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0' } });
        expect(res.result.family).to.equal('Firefox');
        expect(res.result.major).to.equal('89');
        expect(res.result.os.family).to.equal('Linux');
    });

    it('parses Safari user-agent with complete information', async () => {

        const server = Hapi.server();
        await server.register(Scooter);

        server.route({ method: 'GET', path: '/', handler: (request, h) => request.plugins.scooter });

        const res = await server.inject({ method: 'GET', url: '/', headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15' } });
        expect(res.result.family).to.exist();
        expect(res.result.os.family).to.equal('Mac OS');
        expect(res.result.os.major).to.equal('10');
        expect(res.result.os.minor).to.equal('15');
        expect(res.result.os.patch).to.equal('7');
    });
});
