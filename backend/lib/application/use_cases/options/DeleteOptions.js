'use strict';

module.exports = (id_option, { OptionsRepository }) => {
  return OptionsRepository.remove(id_option);
};
