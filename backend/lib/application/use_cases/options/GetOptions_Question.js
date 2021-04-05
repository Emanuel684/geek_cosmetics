'use strict';

module.exports = (id_question, { OptionsRepository}) => {
  return OptionsRepository.get_options(id_question);
};
