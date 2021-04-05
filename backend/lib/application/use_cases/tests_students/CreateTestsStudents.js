'use strict';

const TestsStudents = require('../../../domain/TestsStudents');

module.exports = async (id_test, id_propspect_preferent, id_aut_user, date_start, date_end, date_send, final_score, state_test, { TestsStudentsRepository }) => {
  
  const testsstudents = new TestsStudents(null, id_test, id_propspect_preferent, id_aut_user, date_start, date_end, date_send, final_score, state_test);
  return TestsStudentsRepository.persist(testsstudents);
};
