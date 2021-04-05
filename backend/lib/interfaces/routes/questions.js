'use strict';

const QuestionsController = require('../controllers/QuestionsController');

module.exports = {
  name: 'questions',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'GET',
        path: '/questions',
        handler: QuestionsController.findQuestions,
        config: {
          description: 'List all questions',
          tags: ['api'],
        }
      },
      // Questions for tests - options
      {
        method: 'GET',
        path: '/tests_questions_options/{id_topic_question}/{id_difficulty}/{number_questions}',
        handler: QuestionsController.findQuestions_test_options,
        config: {
          description: 'List questions for test',
          tags: ['api'],
        }
      },
      // Questions for tests - options
      {
        method: 'POST',
        path: '/questions',
        handler: QuestionsController.createQuestion,
        options: {
          description: 'Create a question',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/questions/{id_question}',
        handler: QuestionsController.getQuestion,
        options: {
          description: 'Get a question for {id_question}',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/questions_topic/{id_topic}',
        handler: QuestionsController.getQuestion_Topic,
        options: {
          description: 'Get a question for {id_topic}',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/questions/{id_question}',
        handler: QuestionsController.deleteQuestion,
        options: {
          description: 'Delete a question',
          tags: ['api'],
        },
      },
      {
        method: 'PUT',
        path: '/questions/{id_question}',
        handler: QuestionsController.updateQuestion,
        options: {
          description: 'Update an existing question',
          tags: ['api'],
        },
      },
    ]);
  }
};