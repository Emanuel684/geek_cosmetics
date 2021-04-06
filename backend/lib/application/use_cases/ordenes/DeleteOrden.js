'use strict';

module.exports = (id_orden, { ordenesRepository }) => {
  return ordenesRepository.remove(id_orden);
};
