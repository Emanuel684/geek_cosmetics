'use strict';

module.exports = (id_test_students, { TestsStudentsRepository }) => {
  return TestsStudentsRepository.remove(id_test_students);
};
