'use strict';

const Hapi = require('@hapi/hapi');
const Good = require('@hapi/good');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Blipp = require('blipp');
const HapiSwagger = require('hapi-swagger');
const Package = require('../../../package');

const createServer = async () => {

  // Create a server with a host and port
  const server = Hapi.server({
    port: process.env.PORT || 3001,
    routes: {cors: {origin: ['*']}}
  });

  // Register vendors plugins
  await server.register([
    Blipp,
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: 'Geek Cosmetics Documentation',
          version: Package.version,
        },
      }
    },
    {
      plugin: Good,
      options: {
        ops: {
          interval: 1000 * 60
        },
        reporters: {
          myConsoleReporter: [
            {
              module: '@hapi/good-squeeze',
              name: 'Squeeze',
              args: [{ ops: '*', log: '*', error: '*', response: '*' }]
            },
            {
              module: '@hapi/good-console'
            },
            'stdout'
          ]
        }
      },
    },
  ]);

  // Register custom plugins
  await server.register([
    require('../../interfaces/routes/articulos'),
    require('../../interfaces/routes/articulos_orden'),
    require('../../interfaces/routes/ordenes')
  ]);

  server.app.serviceLocator = require('../../infrastructure/config/service-locator');

  return server;
};

module.exports = createServer;