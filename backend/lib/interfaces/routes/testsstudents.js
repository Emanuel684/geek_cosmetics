const TestsStudentsController = require('../controllers/TestsStudentsController');

module.exports = {
  name: 'tests_students',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'POST',
        path: '/tests_students',
        handler: TestsStudentsController.createTestsStudents,
        options: {
          description: 'Create a test student',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/tests_students',
        handler: TestsStudentsController.findTestsStudents,
        config: {
          description: 'List all tests students',
          tags: ['api'],
        }
      },
      {
        method: 'GET',
        path: '/tests_students/{id_test_students}',
        handler: TestsStudentsController.getTestsStudents,
        options: {
          description: 'Get a option for {id_test_students}',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/tests_students_tests/{id_students}',
        handler: TestsStudentsController.getTestsStudents_Tests,
        options: {
          description: 'Get a option for {id_students}',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/tests_student_tests/{id_prospect_preferent}/{id_aut_user}',
        handler: TestsStudentsController.getStudentTests,
        options: {
          description: 'Get all tests for a user',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/tests_students/{id_test_students}',
        handler: TestsStudentsController.deleteTestsStudents,
        options: {
          description: 'Delete a test student',
          tags: ['api'],
        },
      },
      {
        method: 'PUT',
        path: '/tests_students/{id_test_students}',
        handler: TestsStudentsController.updateTestsStudents,
        options: {
          description: 'Update an existing test student',
          tags: ['api'],
        },
      }
    ]);
  }
};