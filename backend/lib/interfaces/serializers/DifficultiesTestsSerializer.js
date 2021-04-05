'use strict';


const _serializeSingleDifficultiesTests = (difficultestests) => {
  return {
    "id_difficulty_test" : difficultestests.id_difficulty_test, 
    "id_difficulty" : difficultestests.id_difficulty,
    "id_test": difficultestests.id_test,
    "number_questions": difficultestests.number_questions,
    "date_creation": difficultestests.date_creation,
    "date_update": difficultestests.date_update
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null difficulties_tests');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleDifficultiesTests);
    }
    return _serializeSingleDifficultiesTests(data);
  }

};