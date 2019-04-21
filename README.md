<a href="http://hapijs.com"><img src="https://github.com/hapijs/assets/blob/master/images/family.svg" width="180px" align="right" /></a>

# scooter

User-agent information plugin.

[![Build Status](https://secure.travis-ci.org/hapijs/scooter.svg?branch=master)](http://travis-ci.org/hapijs/scooter)

Scooter uses the [useragent] package to provide user-agent information. For
more details of what information scooter provides, please see the [useragent](https://www.npmjs.org/package/useragent).

# Usage

``` javascript
const Hapi = require('@hapi/hapi');
const Scooter = require('@hapi/scooter');

const start = async () => {

    const server = new Hapi.Server();

    server.route({
        method: 'GET',
        path: '/user-agent',
        handler: (request, h) => {

            return request.plugins.scooter;
        }
    });

    await server.register(Scooter);
    await server.start();
    console.log(server.info.uri + '/user-agent');
};

start();
```
