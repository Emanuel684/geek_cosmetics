'use strict';

const Boom = require('@hapi/boom');
const CreateTestsStudents = require('../../application/use_cases/tests_students/CreateTestsStudents');
const ListStudentTests = require('../../application/use_cases/tests_students/ListStudentTests')
const UpdateTestsStudents = require('../../application/use_cases/tests_students/UpdateTestsStudents');
const GetTestsStudents = require('../../application/use_cases/tests_students/GetTestsStudents');
const DeleteTestsStudents = require('../../application/use_cases/tests_students/DeleteTestsStudents');
const ListTestsStudents = require('../../application/use_cases/tests_students/ListTestsStudents');

module.exports = {

  async createTestsStudents(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { id_test, id_prospect_preferent, id_aut_user, date_start, date_end, date_send, final_score, state_test } = request.payload;

    try {
      // Treatment
      const testsstudents = await CreateTestsStudents(id_test, id_prospect_preferent, id_aut_user, date_start, date_end, date_send, final_score, state_test, serviceLocator);

      // Output
      return serviceLocator.testsstudentsSerializer.serialize(testsstudents);

    } catch (error) {
      let message = "An internal server error occurred"
      if (error.parent != undefined && error.parent.constraint == "uq_email_auth_user")
        message = "This email is already registered"
      else
        console.log(error);
      return h.response({ statusCode: 500, error: "Internal Server Error", mensaje: message }).code(500)
    }
  },

  
  async updateTestsStudents(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_test_students = request.params.id_test_students;
    const { id_test, id_prospect_preferent, id_aut_user, date_start, date_end, date_send, final_score, state_test } = request.payload;

    // Treatment
  
    const testsstudents = await UpdateTestsStudents(id_test_students, id_test, id_prospect_preferent, id_aut_user, date_start, date_end, date_send, final_score, state_test, serviceLocator);
  
    // Output
    if (testsstudents) {
      return serviceLocator.testsstudentsSerializer.serialize(testsstudents);
    } else {
      return Boom.notFound('Test Student not found');
    }
  },

  async findTestsStudents(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const data_testsStudents = await ListTestsStudents(serviceLocator);

    // Output
    return data_testsStudents.map(serviceLocator.testsstudentsSerializer.serialize)
  },

  async getTestsStudents(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_test_students = request.params.id_test_students;

    // Treatment
    const testsstudents = await GetTestsStudents(id_test_students, serviceLocator);

    // Output
    if (!testsstudents) {
      return Boom.notFound('Test Student not found');
    }

    return serviceLocator.testsstudentsSerializer.serialize(testsstudents);
  },

  async getTestsStudents_Tests(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_students = request.params.id_students;

    // Treatment
    const testsstudents = await GetTestsStudents(id_students, serviceLocator);

    // Output
    if (!testsstudents) {
      return Boom.notFound('Test Student not found');
    }

    return serviceLocator.testsstudentsSerializer.serialize(testsstudents);
  },

  async getStudentTests(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_prospect_preferent = request.params.id_prospect_preferent;
    const id_aut_user = request.params.id_aut_user;

    // Treatment
    const testsstudents = await ListStudentTests(id_prospect_preferent, id_aut_user, serviceLocator);

    // Output
    if (!testsstudents) {
      return Boom.notFound('Test Student not found');
    }

    return serviceLocator.testsstudentsSerializer.serialize(testsstudents);
  },

  async deleteTestsStudents(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_test_students = request.params.id_test_students;

    // Treatment
    await DeleteTestsStudents(id_test_students, serviceLocator);

    // Output
    return h.response().code(204);
  },


};
