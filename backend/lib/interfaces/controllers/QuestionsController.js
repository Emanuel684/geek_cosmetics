'use strict';

const Boom = require('@hapi/boom');
const ListQuestions = require('../../application/use_cases/questions/ListQuestions');
const ListQuestionsTestOptions = require('../../application/use_cases/questions/ListQuestionsTestOptions')
const CreateQuestion = require('../../application/use_cases/questions/CreateQuestions');
const GetQuestion = require('../../application/use_cases/questions/GetQuestions');
const getQuestion_Topic = require('../../application/use_cases/questions/GetQuestions_Topic')
const DeleteQuestion = require('../../application/use_cases/questions/DeleteQuestion');
const UpdateQuestion  = require('../../application/use_cases/questions/UpdateQuestion');
module.exports = {

  async createQuestion(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { id_difficulty, id_topic_question, description_question, id_img_question, date_creation, date_update } = request.payload;

    try {
      // Treatment
      const question = await CreateQuestion(id_difficulty, id_topic_question, description_question, id_img_question, date_creation, date_update, serviceLocator);

      // Output
      return serviceLocator.questionsSerializer.serialize(question);

    } catch (error) {
      let message = "An internal server error occurred"
      if (error.parent != undefined && error.parent.constraint == "uq_email_auth_user")
        message = "This email is already registered"
      else
        console.log(error);
      return h.response({ statusCode: 500, error: "Internal Server Error", mensaje: message }).code(500)
    }
  },


  async updateQuestion(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_question = request.params.id_question;
    const { id_difficulty, id_topic_question, id_img_question, description_question, date_creation, date_update } = request.payload;

    // Treatment
  
    const question = await UpdateQuestion(id_question, id_difficulty, id_topic_question, id_img_question, description_question, date_creation, date_update, serviceLocator);
  
    // Output
    if (question) {
      return serviceLocator.questionsSerializer.serialize(question);
    } else {
      return Boom.notFound('Question not found');
    }
  },

  async findQuestions(request) {

    // List all questions
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const questions = await ListQuestions(serviceLocator);

    // Output
    return questions.map(serviceLocator.questionsSerializer.serialize)
  },
  // Questions for tests
  async findQuestions_test_options(request) {

    // List all questions
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    const id_topic_question = request.params.id_topic_question;
    const id_difficulty = request.params.id_difficulty;
    const number_questions = request.params.number_questions;

    // Treatment
    const questions = await ListQuestionsTestOptions(id_topic_question, id_difficulty, number_questions,serviceLocator);

    // Output
    return questions.map(serviceLocator.questionsSerializer.serialize)
  },
  // Questions for tests

  async getQuestion(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_question = request.params.id_question;

    // Treatment
    const question = await GetQuestion(id_question, serviceLocator);

    // Output
    if (!question) {
      return Boom.notFound('Question not found');
    }

    return serviceLocator.questionsSerializer.serialize(question);
  },

  async getQuestion_Topic(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_topic = request.params.id_topic;

    // Treatment
    const question = await getQuestion_Topic(id_topic, serviceLocator);

    // Output
    if (!question) {
      return Boom.notFound('Question not found');
    }

    return serviceLocator.questionsSerializer.serialize(question);
  },

  async deleteQuestion(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_question = request.params.id_question;

    // Treatment
    await DeleteQuestion(id_question, serviceLocator);

    // Output
    return h.response().code(204);
  },

};
