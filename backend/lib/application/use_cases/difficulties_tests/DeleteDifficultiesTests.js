'use strict';

module.exports = (id_difficulty_test, { DifficultiesTestsRepository }) => {
  return DifficultiesTestsRepository.remove(id_difficulty_test);
};
