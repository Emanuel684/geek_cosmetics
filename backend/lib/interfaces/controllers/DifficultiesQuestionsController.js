'use strict';

const Boom = require('@hapi/boom');
const CreateDifficultiesQuestions = require('../../application/use_cases/difficulties_questions/CreateDifficultiesQuestions');
const UpdateDifficultiesQuestions = require('../../application/use_cases/difficulties_questions/UpdateDifficultiesQuestions');
const GetDifficultiesQuestions = require('../../application/use_cases/difficulties_questions/GetDifficultiesQuestions');
const DeleteDifficultiesQuestions = require('../../application/use_cases/difficulties_questions/DeleteDifficultiesQuestions');
const ListDifficultiesQuestions = require('../../application/use_cases/difficulties_questions/ListDifficultiesQuestions');

module.exports = {

  async createDifficultiesQuestions(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { name_category, points_question, date_creation } = request.payload;

    try {
      // Treatment
      const difficultiesquestions = await CreateDifficultiesQuestions( name_category, points_question, date_creation, serviceLocator);

      // Output
      return serviceLocator.difficultiesquestionsSerializer.serialize(difficultiesquestions);

    } catch (error) {
      let message = "An internal server error occurred"
      if (error.parent != undefined && error.parent.constraint == "uq_email_auth_user")
        message = "This email is already registered"
      else
        console.log(error);
      return h.response({ statusCode: 500, error: "Internal Server Error", mensaje: message }).code(500)
    }
  },

  
  async updateDifficultiesQuestions(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_difficulty = request.params.id_difficulty;
    const { name_category, points_question, date_creation } = request.payload;

    // Treatment
  
    const difficultiesquestions = await UpdateDifficultiesQuestions(id_difficulty, name_category, points_question, date_creation, serviceLocator);
  
    // Output
    if (difficultiesquestions) {
      return serviceLocator.difficultiesquestionsSerializer.serialize(difficultiesquestions);
    } else {
      return Boom.notFound('Difficulties_Questions not found');
    }
  },

  async findDifficultiesQuestions(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const data_difficultiesQuestions = await ListDifficultiesQuestions(serviceLocator);

    // Output
    return data_difficultiesQuestions.map(serviceLocator.difficultiesquestionsSerializer.serialize)
  },

  async getDifficultiesQuestions(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_difficulty = request.params.id_difficulty;

    // Treatment
    const difficultiesquestions = await GetDifficultiesQuestions(id_difficulty, serviceLocator);

    // Output
    if (!difficultiesquestions) {
      return Boom.notFound('Difficulties_Questions not found');
    }

    return serviceLocator.difficultiesquestionsSerializer.serialize(difficultiesquestions);
  },

  async deleteDifficultiesQuestions(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_difficulty = request.params.id_difficulty;

    // Treatment
    await DeleteDifficultiesQuestions(id_difficulty, serviceLocator);

    // Output
    return h.response().code(204);
  },


};
