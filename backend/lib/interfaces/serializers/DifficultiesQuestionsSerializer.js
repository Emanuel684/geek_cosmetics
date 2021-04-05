'use strict';


const _serializeSingleDifficultiesQuestions = (difficultesquestions) => {
  return {
    "id_difficulty" : difficultesquestions.id_difficulty, 
    "name_category" : difficultesquestions.name_category,
    "points_question": difficultesquestions.points_question,
    "date_creation": difficultesquestions.date_creation
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null difficulties_questions');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleDifficultiesQuestions);
    }
    return _serializeSingleDifficultiesQuestions(data);
  }

};