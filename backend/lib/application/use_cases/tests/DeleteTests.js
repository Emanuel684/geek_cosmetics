'use strict';

module.exports = (id_test, { TestsRepository }) => {
  return TestsRepository.remove(id_test);
};
