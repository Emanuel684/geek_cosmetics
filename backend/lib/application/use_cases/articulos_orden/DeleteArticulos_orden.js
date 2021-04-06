'use strict';

module.exports = (id_articulo_orden, { articulosordenRepository }) => {
  return articulosordenRepository.remove(id_articulo_orden);
};
