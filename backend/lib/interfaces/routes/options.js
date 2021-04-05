const OptionsController = require('../controllers/OptionsController');

module.exports = {
  name: 'options',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'POST',
        path: '/options',
        handler: OptionsController.CreateOption,
        options: {
          description: 'Create a option',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/options',
        handler: OptionsController.findOptions,
        config: {
          description: 'List all options',
          tags: ['api'],
        }
      },
      {
        method: 'GET',
        path: '/options/{id_option}',
        handler: OptionsController.getOption,
        options: {
          description: 'Get a option for {id_option}',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/options_questions/{id_question}',
        handler: OptionsController.getOption_question,
        options: {
          description: 'Get a options for {id_question}',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/options/{id_option}',
        handler: OptionsController.deleteOption,
        options: {
          description: 'Delete a option',
          tags: ['api'],
        },
      },
      {
        method: 'PUT',
        path: '/options/{id_option}',
        handler: OptionsController.UpdateOption,
        options: {
          description: 'Update an existing option',
          tags: ['api'],
        },
      }
    ]);
  }
};