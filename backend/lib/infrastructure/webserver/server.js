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
          title: 'Academia Geek App Documentation',
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
    require('./oauth'),
    require('../../interfaces/routes/hello'),
    require('../../interfaces/routes/private'),
    require('../../interfaces/routes/users'),
    require('../../interfaces/routes/questions'),
    require('../../interfaces/routes/topics'),
    require('../../interfaces/routes/options'),
    require('../../interfaces/routes/difficultiesquestions'),
    // Las que faltan
    require('../../interfaces/routes/difficultiestests'),
    require('../../interfaces/routes/testsstudents'),
    require('../../interfaces/routes/tests'),
    require('../../interfaces/routes/answers'),

  ]);

  server.app.serviceLocator = require('../../infrastructure/config/service-locator');

  return server;
};

module.exports = createServer;