'use strict';

const TopicsController = require('../controllers/TopicsController');

module.exports = {
  name: 'topics',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'POST',
        path: '/topics',
        handler: TopicsController.CreateTopic,
        options: {
          description: 'Create a topic',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/topics',
        handler: TopicsController.findTopics,
        config: {
          description: 'List all topics',
          tags: ['api'],
        }
      },
      {
        method: 'GET',
        path: '/topics/{id_topic}',
        handler: TopicsController.getTopic,
        options: {
          description: 'Get a topic for {id_topic}',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/topics/{id_topic}',
        handler: TopicsController.deleteTopic,
        options: {
          description: 'Delete a topic',
          tags: ['api'],
        },
      },
      {
        method: 'PUT',
        path: '/topics/{id_topic}',
        handler: TopicsController.UpdateTopic,
        options: {
          description: 'Update an existing topic',
          tags: ['api'],
        },
      }
    ]);
  }
};