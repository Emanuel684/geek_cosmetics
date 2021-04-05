'use strict';

module.exports = (id_test, { TestsRepository }) => {
  return TestsRepository.get(id_test);
};
