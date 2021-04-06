'use strict';

const ArticulosOrden = require('../../../domain/ArticulosOrden');

module.exports = async (id_articulo, id_orden, cantidad_articulo, { articulosordenRepository }) => {
  
  const articulosorden_data = new ArticulosOrden(null, id_articulo, id_orden, cantidad_articulo);
  return articulosordenRepository.persist(articulosorden_data);
};
