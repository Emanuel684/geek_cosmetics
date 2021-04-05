'use strict';


const _serializeSingleTestsStudents = (testsstudents) => {
  return {
    "id_test_students" : testsstudents.id_test_students, 
    "id_test" : testsstudents.id_test,
    "id_prospect_preferent": testsstudents.id_prospect_preferent,
    "id_aut_user": testsstudents.id_aut_user,
    "date_start": testsstudents.date_start,
    "date_end": testsstudents.date_end,
    "date_send": testsstudents.date_send,
    "final_score": testsstudents.final_score,
    "state_test": testsstudents.state_test
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null tests_students');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleTestsStudents);
    }
    return _serializeSingleTestsStudents(data);
  }

};