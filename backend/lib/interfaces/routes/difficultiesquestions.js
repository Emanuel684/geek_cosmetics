const DifficultiesQuestionsController = require('../controllers/DifficultiesQuestionsController');

module.exports = {
  name: 'difficulties_questions',
  version: '1.0.0',
  register: async (server) => {
    server.route([
      {
        method: 'POST',
        path: '/difficulties_questions',
        handler: DifficultiesQuestionsController.createDifficultiesQuestions,
        options: {
          description: 'Create a option',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/difficulties_questions',
        handler: DifficultiesQuestionsController.findDifficultiesQuestions,
        config: {
          description: 'List all difficulties_questions',
          tags: ['api'],
        }
      },
      {
        method: 'GET',
        path: '/difficulties_questions/{id_difficulty}',
        handler: DifficultiesQuestionsController.getDifficultiesQuestions,
        options: {
          description: 'Get a option for {id_difficulty}',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/difficulties_questions/{id_difficulty}',
        handler: DifficultiesQuestionsController.deleteDifficultiesQuestions,
        options: {
          description: 'Delete a difficulties_questions',
          tags: ['api'],
        },
      },
      {
        method: 'PUT',
        path: '/difficulties_questions/{id_difficulty}',
        handler: DifficultiesQuestionsController.updateDifficultiesQuestions,
        options: {
          description: 'Update an existing difficulties_questions',
          tags: ['api'],
        },
      }
    ]);
  }
};