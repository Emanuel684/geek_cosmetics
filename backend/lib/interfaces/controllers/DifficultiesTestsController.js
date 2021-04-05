'use strict';

const Boom = require('@hapi/boom');
const CreateDifficultiesTests = require('../../application/use_cases/difficulties_tests/CreateDifficultiesTests');
const UpdateDifficultiesTests = require('../../application/use_cases/difficulties_tests/UpdateDifficultiesTests');
const GetDifficultiesTests = require('../../application/use_cases/difficulties_tests/GetDifficultiesTests');
const DeleteDifficultiesTests = require('../../application/use_cases/difficulties_tests/DeleteDifficultiesTests');
const ListDifficultiesTests = require('../../application/use_cases/difficulties_tests/ListDifficultiesTests');
const GetDifficultiesTests_Tests = require('../../application/use_cases/difficulties_tests/GetDifficultiesTests_Tests');

module.exports = {

  async createDifficultiesTests(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { id_difficulty, id_test, number_questions, date_creation, date_update } = request.payload;

    try {
      // Treatment
      const difficultiestests = await CreateDifficultiesTests( id_difficulty, id_test, number_questions, date_creation, date_update, serviceLocator);

      // Output
      return serviceLocator.difficultiestestsSerializer.serialize(difficultiestests);

    } catch (error) {
      let message = "An internal server error occurred"
      if (error.parent != undefined && error.parent.constraint == "uq_email_auth_user")
        message = "This email is already registered"
      else
        console.log(error);
      return h.response({ statusCode: 500, error: "Internal Server Error", mensaje: message }).code(500)
    }
  },

  
  async updateDifficultiesTests(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_difficulty_test = request.params.id_difficulty_test;
    const { id_difficulty, id_test, number_questions, date_creation, date_update } = request.payload;

    // Treatment
  
    const difficultiestests = await UpdateDifficultiesTests(id_difficulty_test, id_difficulty, id_test, number_questions, date_creation, date_update, serviceLocator);
  
    // Output
    if (difficultiestests) {
      return serviceLocator.difficultiestestsSerializer.serialize(difficultiestests);
    } else {
      return Boom.notFound('Difficulty Test not found');
    }
  },

  async findDifficultiesTests(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const data_difficultiesTests = await ListDifficultiesTests(serviceLocator);

    // Output
    return data_difficultiesTests.map(serviceLocator.difficultiestestsSerializer.serialize)
  },

  async getDifficultiesTests(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_difficulty_test = request.params.id_difficulty_test;

    // Treatment
    const difficultiestests = await GetDifficultiesTests(id_difficulty_test, serviceLocator);

    // Output
    if (!difficultiestests) {
      return Boom.notFound('Difficulty Test not found');
    }

    return serviceLocator.difficultiestestsSerializer.serialize(difficultiestests);
  },

  async getDifficultiesTests_Tests(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_test = request.params.id_test;

    // Treatment
    const difficultiestest = await GetDifficultiesTests_Tests(id_test, serviceLocator);

    // Output
    if (!difficultiestest) {
      return Boom.notFound('Difficulty Test not found');
    }

    return serviceLocator.difficultiestestsSerializer.serialize(difficultiestest);
  },

  async deleteDifficultiesTests(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_difficulty_test = request.params.id_difficulty_test;

    // Treatment
    await DeleteDifficultiesTests(id_difficulty_test, serviceLocator);

    // Output
    return h.response().code(204);
  },


};
