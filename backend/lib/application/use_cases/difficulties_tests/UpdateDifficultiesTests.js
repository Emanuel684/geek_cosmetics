'use strict';

const DifficultiesTests = require('../../../domain/DifficultiesTests');

module.exports = async (id_difficulty_test, id_difficulty, id_test, number_questions, date_creation, date_update, { DifficultiesTestsRepository }) => {
  const difficultiestests = new DifficultiesTests(id_difficulty_test, id_difficulty, id_test, number_questions, date_creation, date_update);
  return DifficultiesTestsRepository.merge(difficultiestests);
};
