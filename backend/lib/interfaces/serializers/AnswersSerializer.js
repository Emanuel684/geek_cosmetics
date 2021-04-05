'use strict';


const _serializeSingleAnswers = (answers) => {
  return {
    "id_answer" : answers.id_answer, 
    "id_option" : answers.id_option,
    "id_test_person": answers.id_test_person,
    "date_registration": answers.date_registration
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null answers');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleAnswers);
    }
    return _serializeSingleAnswers(data);
  }

};