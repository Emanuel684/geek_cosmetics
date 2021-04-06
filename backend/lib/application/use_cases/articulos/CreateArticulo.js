'use strict';

const Articulos = require('../../../domain/Articulos');

module.exports = async (descripcion_articulo, precio, existencia, { articulosRepository }) => {
  
  const articulos_data = new Articulos(null, descripcion_articulo, precio, existencia);
  return articulosRepository.persist(articulos_data);
};
