'use strict';

const Option = require('../../../domain/Option');

module.exports = async (id_option, id_question, id_img_option, description_option, answer_option, date_creation, date_update, { OptionsRepository }) => {
  const option = new Option(id_option, id_question, id_img_option, description_option, answer_option, date_creation, date_update);
  return OptionsRepository.merge(option);
};
