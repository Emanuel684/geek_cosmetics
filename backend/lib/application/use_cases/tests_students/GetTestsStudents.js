'use strict';

module.exports = (id_test_students, { TestsStudentsRepository }) => {
  return TestsStudentsRepository.get(id_test_students);
};
