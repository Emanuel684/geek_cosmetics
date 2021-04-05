'use strict';

const DifficultiesTests = require('../../../domain/DifficultiesTests');

module.exports = async (id_difficulty, id_test, number_questions, date_creation, date_update, { DifficultiesTestsRepository }) => {
  
  const difficultiestests = new DifficultiesTests(null, id_difficulty, id_test, number_questions, date_creation, date_update);
  return DifficultiesTestsRepository.persist(difficultiestests);
};
