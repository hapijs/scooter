![scooter Logo](https://raw.github.com/hapijs/scooter/master/images/scooter.png)

**Scooter** is a User-agent information plugin for [**hapi**](https://github.com/hapijs/hapi)

[![Build Status](https://secure.travis-ci.org/hapijs/scooter.png)](http://travis-ci.org/hapijs/scooter)

Lead Maintainer: [Daniel Bretoi](https://github.com/danielb2)


Scooter uses the [useragent] package to provide user-agent information. For
more details of what information scooter provides, please see the useragent web-page.

[useragent]: https://www.npmjs.org/package/useragent

# Usage

``` javascript
    var Hapi = require('hapi');
    var server = new Hapi.Server(8086);
    var Scooter = require('scooter');

    server.route({
        method: 'GET',
        path: '/user-agent',
        handler: function (request, reply) {

            return reply(request.plugins.scooter.toJSON());
        }
    });

    server.register(Scooter, function(err) {

        server.start(function () {

            console.log(server.info.uri + '/user-agent');
        });
    });
```
