'use strict';

const constants = require('./constants');
const environment = require('./environment');
const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');
const UserSerializer = require('../../interfaces/serializers/UserSerializer');
const TopicsSerializer = require('../../interfaces/serializers/TopicsSerializer');
const QuestionsSerializer = require('../../interfaces/serializers/QuestionsSerializer');
const OptionsSerializer = require('../../interfaces/serializers/OptionsSerializer');
const DifficultiesQuestionsSerializer = require('../../interfaces/serializers/DifficultiesQuestionsSerializer');
// Cosas que faltan
const DifficultiesTestsSerializer = require('../../interfaces/serializers/DifficultiesTestsSerializer');
const TestsStudentsSerializer = require('../../interfaces/serializers/TestsStudentsSerializer');
const TestsSerializer = require('../../interfaces/serializers/TestsSerializer');
const AnswersSerializer = require('../../interfaces/serializers/AnswersSerializer');

function buildBeans() {

  const beans = {
    accessTokenManager: new JwtAccessTokenManager(),
    userSerializer: new UserSerializer(),
    topicsSerializer: new TopicsSerializer(),
    questionsSerializer: new QuestionsSerializer(),
    optionsSerializer: new OptionsSerializer(),
    difficultiesquestionsSerializer: new DifficultiesQuestionsSerializer(),
    // Cosas que faltan
    difficultiestestsSerializer: new DifficultiesTestsSerializer(),
    testsstudentsSerializer: new TestsStudentsSerializer(),
    testsSerializer: new TestsSerializer(),
    answersSerializer: new AnswersSerializer()
  };

  if (environment.database.dialect === constants.SUPPORTED_DATABASE.IN_MEMORY) {
    const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory');
    beans.userRepository = new UserRepositoryInMemory();
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
    const UserRepositoryMongo = require('../repositories/UserRepositoryMongo');
    beans.userRepository = new UserRepositoryMongo();
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRES) {
    const UserRepositoryPostgres= require('../repositories/UserRepositoryPostgres');
    const TopicRepositoryPostgres= require('../repositories/TopicRepositoryPostgres');
    const QuestioRepositoryPostgres= require('../repositories/QuestionRepositoryPostgres');
    const OptionRepositoryPostgres= require('../repositories/OptionRepositoryPostgres');
    const DifficultiesQuestionsRepositoryPostgres= require('../repositories/DifficultiesQuestionsRepositoryPostgres');
    // Cosas que faltan
    const DifficultiesTestsRepositoryPostgres= require('../repositories/DifficultiesTestsRepositoryPostgres');
    const TestsStudentsRepositoryPostgres= require('../repositories/TestsStudentsRepositoryPostgres');
    const TestsRepositoryPostgres= require('../repositories/TestsRepositoryPostgres');
    const AnswersRepositoryPostgres= require('../repositories/AnswersRepositoryPostgres');

    beans.userRepository = new UserRepositoryPostgres();
    beans.TopicsRepository = new TopicRepositoryPostgres();
    beans.QuestionsRepository = new QuestioRepositoryPostgres();
    beans.OptionsRepository = new OptionRepositoryPostgres();
    beans.DifficultiesQuestionsRepository = new DifficultiesQuestionsRepositoryPostgres();
    // Cosas que faltan
    beans.DifficultiesTestsRepository = new DifficultiesTestsRepositoryPostgres();
    beans.TestsStudentsRepository = new TestsStudentsRepositoryPostgres();
    beans.TestsRepository = new TestsRepositoryPostgres();
    beans.AnswersRepository = new AnswersRepositoryPostgres();
  } else {
    const UserRepositorySQLite= require('../repositories/UserRepositorySQLite');
    beans.userRepository = new UserRepositorySQLite();
  }

  return beans;
}

module.exports = buildBeans();
