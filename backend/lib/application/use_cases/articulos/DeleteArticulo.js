'use strict';

module.exports = (id_articulo, { articulosRepository }) => {
  return articulosRepository.remove(id_articulo);
};
