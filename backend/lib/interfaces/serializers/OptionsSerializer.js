'use strict';


const _serializeSingleOption = (option) => {
  return {
    "id_option" : option.id_option, 
    "id_question" : option.id_question,
    "id_img_option": option.id_img_option,
    "description_option": option.description_option,
    "answer_option": option.answer_option,
    "date_creation": option.date_creation,
    "date_update" : option.date_update
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null option');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleOption);
    }
    return _serializeSingleOption(data);
  }

};