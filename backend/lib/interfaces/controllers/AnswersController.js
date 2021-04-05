'use strict';

const Boom = require('@hapi/boom');
const CreateAnswers = require('../../application/use_cases/answers/CreateAnswers');
const UpdateAnswers = require('../../application/use_cases/answers/UpdateAnswers');
const GetAnswers = require('../../application/use_cases/answers/GetAnswers');
const DeleteAnswers = require('../../application/use_cases/answers/DeleteAnswers');
const ListAnswers = require('../../application/use_cases/answers/ListAnswers');

module.exports = {

  async createAnswer(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { id_option, id_test_person, date_registration } = request.payload;

    try {
      // Treatment
      const answers = await CreateAnswers( id_option, id_test_person, date_registration, serviceLocator);

      // Output
      return serviceLocator.answersSerializer.serialize(answers);

    } catch (error) {
      let message = "An internal server error occurred"
      if (error.parent != undefined && error.parent.constraint == "uq_email_auth_user")
        message = "This email is already registered"
      else
        console.log(error);
      return h.response({ statusCode: 500, error: "Internal Server Error", mensaje: message }).code(500)
    }
  },

  
  async updateAnswers(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_answer = request.params.id_answer;
    const { id_option, id_test_person, date_registration } = request.payload;

    // Treatment
  
    const answers = await UpdateAnswers(id_answer, id_option, id_test_person, date_registration, serviceLocator);
  
    // Output
    if (answers) {
      return serviceLocator.answersSerializer.serialize(answers);
    } else {
      return Boom.notFound('Answer not found');
    }
  },

  async findAnswers(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const data_answers = await ListAnswers(serviceLocator);

    // Output
    return data_answers.map(serviceLocator.answersSerializer.serialize)
  },

  async getAnswers(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_answer = request.params.id_answer;

    // Treatment
    const answers = await GetAnswers(id_answer, serviceLocator);

    // Output
    if (!answers) {
      return Boom.notFound('Answer not found');
    }

    return serviceLocator.answersSerializer.serialize(answers);
  },

  async deleteAnswers(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_answer = request.params.id_answer;

    // Treatment
    await DeleteAnswers(id_answer, serviceLocator);

    // Output
    return h.response().code(204);
  },


};
