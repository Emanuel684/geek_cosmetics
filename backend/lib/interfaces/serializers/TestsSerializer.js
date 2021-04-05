'use strict';


const _serializeSingleTests = (tests) => {
  return {
    "id_test" : tests.id_test, 
    "id_topic_test" : tests.id_topic_test,
    "name_topic" : tests.name_topic,
    "description_question" : tests.description_question,
    "name_test": tests.name_test,
    "description_test": tests.description_test,
    "time_duration": tests.time_duration,
    "date_start": tests.date_start,
    "date_end": tests.date_end,
    "password_test": tests.password_test,
    "date_creation": tests.date_creation,
    "date_update": tests.date_update
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null tests');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleTests);
    }
    return _serializeSingleTests(data);
  }

};