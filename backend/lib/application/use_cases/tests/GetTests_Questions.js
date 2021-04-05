'use strict';

module.exports = (id_test, { TestsRepository }) => {
  return TestsRepository.get_question(id_test);
};
