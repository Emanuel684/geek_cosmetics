'use strict';

module.exports = (id_prospect_preferent, id_aut_user,{ TestsStudentsRepository }) => {
  return TestsStudentsRepository.find_student_tests(id_prospect_preferent, id_aut_user);
};
