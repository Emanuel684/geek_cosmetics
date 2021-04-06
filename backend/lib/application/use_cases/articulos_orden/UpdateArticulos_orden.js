'use strict';

const ArticulosOrden = require('../../../domain/ArticulosOrden');

module.exports = async (id_articulo_orden, id_articulo, id_orden, cantidad_articulo, { articulosordenRepository }) => {
  const articulosorden = new ArticulosOrden(id_articulo_orden, id_articulo, id_orden, cantidad_articulo);
  return articulosordenRepository.merge(articulosorden);
};
