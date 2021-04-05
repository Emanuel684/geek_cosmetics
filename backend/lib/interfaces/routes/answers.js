const AnswersController = require('../controllers/AnswersController');

module.exports = {
  name: 'answers',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'POST',
        path: '/answers',
        handler: AnswersController.createAnswer,
        options: {
          description: 'Create a answer',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/answers',
        handler: AnswersController.findAnswers,
        config: {
          description: 'List all answers',
          tags: ['api'],
        }
      },
      {
        method: 'GET',
        path: '/answers/{id_answer}',
        handler: AnswersController.getAnswers,
        options: {
          description: 'Get a option for {id_answer}',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/answers/{id_answer}',
        handler: AnswersController.deleteAnswers,
        options: {
          description: 'Delete a answers',
          tags: ['api'],
        },
      },
      {
        method: 'PUT',
        path: '/answers/{id_answer}',
        handler: AnswersController.updateAnswers,
        options: {
          description: 'Update an existing answers',
          tags: ['api'],
        },
      }
    ]);
  }
};