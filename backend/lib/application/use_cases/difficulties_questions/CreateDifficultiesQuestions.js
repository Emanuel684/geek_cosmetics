'use strict';

const DifficultiesQuestions = require('../../../domain/DifficultiesQuestions');

module.exports = async (name_category, points_question, date_creation, { DifficultiesQuestionsRepository }) => {
  
  const difficultiesquestions = new DifficultiesQuestions(null, name_category, points_question, date_creation);
  return DifficultiesQuestionsRepository.persist(difficultiesquestions);
};
