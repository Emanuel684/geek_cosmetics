'use strict';

module.exports = (id_option, { OptionsRepository }) => {
  return OptionsRepository.get(id_option);
};
