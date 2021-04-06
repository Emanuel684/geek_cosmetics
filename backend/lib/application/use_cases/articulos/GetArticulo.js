'use strict';

module.exports = (id_articulo, { articulosRepository }) => {
  return articulosRepository.get(id_articulo);
};
