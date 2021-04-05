'use strict';

module.exports = (id_difficulty_test, { DifficultiesTestsRepository }) => {
  return DifficultiesTestsRepository.get(id_difficulty_test);
};
