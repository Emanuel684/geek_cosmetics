'use strict';

const Boom = require('@hapi/boom');
const CreateTopics = require('../../application/use_cases/topics/CreateTopics');
const UpdateTopic = require('../../application/use_cases/topics/UpdateTopic');
const GetTopic = require('../../application/use_cases/topics/GetTopics');
const DeleteTopic = require('../../application/use_cases/topics/DeleteTopic');
const ListTopics = require('../../application/use_cases/topics/ListTopics');

module.exports = {

  async CreateTopic(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;
    console.log('Holi',serviceLocator)

    // Input
    const { name_topic,description_topic,date_creation,date_update } = request.payload;

    try {
      // Treatment
      const topic = await CreateTopics(name_topic, description_topic, date_creation, date_update, serviceLocator);

      // Output
      return serviceLocator.topicsSerializer.serialize(topic);

    } catch (error) {
      let message = "An internal server error occurred"
      if (error.parent != undefined && error.parent.constraint == "uq_email_auth_user")
        message = "This email is already registered"
      else
        console.log(error);
      return h.response({ statusCode: 500, error: "Internal Server Error", mensaje: message }).code(500)
    }
  },

  
  async UpdateTopic(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_topic = request.params.id_topic;
    const { name_topic, description_topic, date_creation, date_update } = request.payload;

    // Treatment
  
    const topic = await UpdateTopic(id_topic, name_topic, description_topic, date_creation, date_update, serviceLocator);
  
    // Output
    if (topic) {
      return serviceLocator.topicsSerializer.serialize(topic);
    } else {
      return Boom.notFound('Topic not found');
    }
  },

  async findTopics(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const data_topics = await ListTopics(serviceLocator);

    // Output
    return data_topics.map(serviceLocator.topicsSerializer.serialize)
  },

  async getTopic(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_topic = request.params.id_topic;

    // Treatment
    const topic = await GetTopic(id_topic, serviceLocator);

    // Output
    if (!topic) {
      return Boom.notFound('Topic not found');
    }

    return serviceLocator.topicsSerializer.serialize(topic);
  },

  async deleteTopic(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_topic = request.params.id_topic;

    // Treatment
    await DeleteTopic(id_topic, serviceLocator);

    // Output
    return h.response().code(204);
  },


};
