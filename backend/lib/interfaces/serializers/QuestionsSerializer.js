'use strict';

const _serializeSingleQuestion = (question) => {
  console.log('This is de varible question',question)
  return {
    "id_question" : question.id_question, 
    "id_difficulty" : question.id_difficulty,
    "id_topic_question": question.id_topic_question,
    "id_img_question": question.id_img_question,
    "description_question": question.description_question,
    "date_creation": question.date_creation,
    "date_update": question.date_update,
    // Campos de la consulta de las preguntas para el test
    "tt_options": question.tt_options
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null question');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleQuestion);
    }
    return _serializeSingleQuestion(data);
  }

};