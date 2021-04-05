'use strict';

const Option = require('../../../domain/Option');

module.exports = async (id_question, id_img_option, description_option, answer_option, date_creation, date_update, { OptionsRepository }) => {
  
  const option = new Option(null, id_question, id_img_option, description_option, answer_option, date_creation, date_update );
  return OptionsRepository.persist(option);
};
