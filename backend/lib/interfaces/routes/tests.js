const TestsController = require('../controllers/TestsController');

module.exports = {
  name: 'tests',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'POST',
        path: '/tests',
        handler: TestsController.createTest,
        options: {
          description: 'Create a test',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/tests',
        handler: TestsController.findTests,
        config: {
          description: 'List all tests',
          tags: ['api'],
        }
      },
      {
        method: 'GET',
        path: '/tests/{id_test}',
        handler: TestsController.getTests,
        options: {
          description: 'Get a option for {id_test}',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/tests_questions/{id_test}',
        handler: TestsController.getTests_questions,
        options: {
          description: 'Get questions, options, topic for {id_test}',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/tests/{id_test}',
        handler: TestsController.deleteTests,
        options: {
          description: 'Delete a test',
          tags: ['api'],
        },
      },
      {
        method: 'PUT',
        path: '/tests/{id_test}',
        handler: TestsController.updateTests,
        options: {
          description: 'Update an existing test',
          tags: ['api'],
        },
      }
    ]);
  }
};