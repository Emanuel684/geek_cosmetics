'use strict';

const Answers = require('../../../domain/Articulos');

module.exports = async (id_articulo, descripcion_articulo, precio, existencia, { articulosRepository }) => {
  const articulos = new Answers(id_articulo, descripcion_articulo, precio, existencia);
  return articulosRepository.merge(articulos);
};
