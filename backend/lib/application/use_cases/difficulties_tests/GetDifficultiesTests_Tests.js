'use strict';

module.exports = (id_test, { DifficultiesTestsRepository }) => {
  return DifficultiesTestsRepository.get_difficulties_test(id_test);
};
