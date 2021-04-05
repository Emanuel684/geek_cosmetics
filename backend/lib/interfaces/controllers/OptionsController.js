'use strict';

const Boom = require('@hapi/boom');
const CreateOptions = require('../../application/use_cases/options/CreateOptions');
const UpdateOption = require('../../application/use_cases/options/UpdateOptions');
const GetOption = require('../../application/use_cases/options/GetOptions');
const DeleteOption = require('../../application/use_cases/options/DeleteOptions');
const ListOptions = require('../../application/use_cases/options/ListOptions');
const GetOptions_Question = require('../../application/use_cases/options/GetOptions_Question')

module.exports = {

  async CreateOption(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { id_question, id_img_option, description_option, answer_option, date_creation, date_update } = request.payload;

    try {
      // Treatment
      const option = await CreateOptions(id_question, id_img_option, description_option, answer_option, date_creation, date_update, serviceLocator);

      // Output
      return serviceLocator.optionsSerializer.serialize(option);

    } catch (error) {
      let message = "An internal server error occurred"
      if (error.parent != undefined && error.parent.constraint == "uq_email_auth_user")
        message = "This email is already registered"
      else
        console.log(error);
      return h.response({ statusCode: 500, error: "Internal Server Error", mensaje: message }).code(500)
    }
  },

  
  async UpdateOption(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_option = request.params.id_option;
    const { id_question, id_img_option, description_option, answer_option, date_creation, date_update } = request.payload;

    // Treatment
  
    const option = await UpdateOption(id_option, id_question, id_img_option, description_option, answer_option, date_creation, date_update, serviceLocator);
  
    // Output
    if (option) {
      return serviceLocator.optionsSerializer.serialize(option);
    } else {
      return Boom.notFound('Option not found');
    }
  },

  async findOptions(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const data_options = await ListOptions(serviceLocator);

    // Output
    return data_options.map(serviceLocator.optionsSerializer.serialize)
  },

  async getOption(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_option = request.params.id_option;

    // Treatment
    const option = await GetOption(id_option, serviceLocator);

    // Output
    if (!option) {
      return Boom.notFound('Option not found');
    }

    return serviceLocator.optionsSerializer.serialize(option);
  },

  async getOption_question(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_question = request.params.id_question;

    // Treatment
    const options = await GetOptions_Question(id_question, serviceLocator);

    // Output
    if (!options) {
      return Boom.notFound('Question not found');
    }

    return serviceLocator.optionsSerializer.serialize(options);
  },

  async deleteOption(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_option = request.params.id_option;

    // Treatment
    await DeleteOption(id_option, serviceLocator);

    // Output
    return h.response().code(204);
  },


};
