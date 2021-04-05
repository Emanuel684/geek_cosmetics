const DifficultiesTestsController = require('../controllers/DifficultiesTestsController');

module.exports = {
  name: 'difficulties_tests',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'POST',
        path: '/difficulties_tests',
        handler: DifficultiesTestsController.createDifficultiesTests,
        options: {
          description: 'Create a difficulty test',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/difficulties_tests',
        handler: DifficultiesTestsController.findDifficultiesTests,
        config: {
          description: 'List all difficulties tests',
          tags: ['api'],
        }
      },
      {
        method: 'GET',
        path: '/difficulties_tests/{id_difficulty_test}',
        handler: DifficultiesTestsController.getDifficultiesTests,
        options: {
          description: 'Get a option for {id_difficulty_test}',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/difficulties_tests/test/{id_test}',
        handler: DifficultiesTestsController.getDifficultiesTests_Tests,
        options: {
          description: 'Get all difficulties for {id_test}',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/difficulties_tests/{id_difficulty_test}',
        handler: DifficultiesTestsController.deleteDifficultiesTests,
        options: {
          description: 'Delete a difficulty test',
          tags: ['api'],
        },
      },
      {
        method: 'PUT',
        path: '/difficulties_tests/{id_difficulty_test}',
        handler: DifficultiesTestsController.updateDifficultiesTests,
        options: {
          description: 'Update an existing difficulty test',
          tags: ['api'],
        },
      }
    ]);
  }
};