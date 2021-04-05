'use strict';

const DifficultiesQuestions = require('../../../domain/DifficultiesQuestions');

module.exports = async (id_difficulty, name_category, points_question, date_creation, { DifficultiesQuestionsRepository }) => {
  const difficultiesquestions = new DifficultiesQuestions(id_difficulty, name_category, points_question, date_creation);
  return DifficultiesQuestionsRepository.merge(difficultiesquestions);
};
