'use strict';

module.exports = (id_orden, { ordenesRepository }) => {
  return ordenesRepository.get(id_orden);
};
