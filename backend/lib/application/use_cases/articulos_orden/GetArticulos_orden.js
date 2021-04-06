'use strict';

module.exports = (id_articulo_orden, { articulosordenRepository }) => {
  return articulosordenRepository.get(id_articulo_orden);
};
