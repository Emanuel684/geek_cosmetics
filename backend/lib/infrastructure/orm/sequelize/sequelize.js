'use strict';

const { Sequelize } = require('sequelize');
const environment = require('../../config/environment');

const sequelize = new Sequelize(environment.database.url);

sequelize.import('./models/AuthUsers');
sequelize.import('./models/TtTopics');
sequelize.import('./models/TtBancksQuestions');
sequelize.import('./models/TtOptions');
sequelize.import('./models/TtDifficultiesQuestions');
// Cosas que faltan
sequelize.import('./models/TtDifficultiesTests');
sequelize.import('./models/TtAnswers');
sequelize.import('./models/TtTests');
sequelize.import('./models/TtTestsStudents');

module.exports = sequelize;