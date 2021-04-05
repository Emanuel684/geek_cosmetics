'use strict';

const Boom = require('@hapi/boom');
const CreateTests = require('../../application/use_cases/tests/CreateTests');
const UpdateTests = require('../../application/use_cases/tests/UpdateTests');
const GetTests = require('../../application/use_cases/tests/GetTests');
const DeleteTests = require('../../application/use_cases/tests/DeleteTests');
const ListTests = require('../../application/use_cases/tests/ListTests');
const GetTests_Questions = require('../../application/use_cases/tests/GetTests_Questions');

module.exports = {

  async createTest(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { id_topic_test, name_test, description_test, time_duration, date_start, date_end, password_test, date_creation, date_update } = request.payload;

    try {
      // Treatment
      const tests = await CreateTests( id_topic_test, name_test, description_test, time_duration, date_start, date_end, password_test, date_creation, date_update, serviceLocator);

      // Output
      return serviceLocator.testsSerializer.serialize(tests);

    } catch (error) {
      let message = "An internal server error occurred"
      if (error.parent != undefined && error.parent.constraint == "uq_email_auth_user")
        message = "This email is already registered"
      else
        console.log(error);
      return h.response({ statusCode: 500, error: "Internal Server Error", mensaje: message }).code(500)
    }
  },

  
  async updateTests(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_test = request.params.id_test;
    const { id_topic_test, name_test, description_test, time_duration, date_start, date_end, password_test, date_creation, date_update } = request.payload;

    // Treatment
  
    const tests = await UpdateTests(id_test, id_topic_test, name_test, description_test, time_duration, date_start, date_end, password_test, date_creation, date_update, serviceLocator);
  
    // Output
    if (tests) {
      return serviceLocator.testsSerializer.serialize(tests);
    } else {
      return Boom.notFound('Test not found');
    }
  },

  async findTests(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const data_tests = await ListTests(serviceLocator);

    // Output
    return data_tests.map(serviceLocator.testsSerializer.serialize)
  },

  async getTests(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_test = request.params.id_test;

    // Treatment
    const test = await GetTests(id_test, serviceLocator);

    // Output
    if (!test) {
      return Boom.notFound('Test not found');
    }

    return serviceLocator.testsSerializer.serialize(test);
  },

  async getTests_questions(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_test = request.params.id_test;

    // Treatment
    const test = await GetTests_Questions(id_test, serviceLocator);

    // Output
    if (!test) {
      return Boom.notFound('Test not found');
    }

    return serviceLocator.testsSerializer.serialize(test);
  },

  async deleteTests(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_test = request.params.id_test;

    // Treatment
    await DeleteTests(id_test, serviceLocator);

    // Output
    return h.response().code(204);
  },


};
