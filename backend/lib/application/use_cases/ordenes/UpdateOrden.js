'use strict';

const Ordenes = require('../../../domain/Ordenes');

module.exports = async (id_orden, numero_orden, nombre_usuario, fecha_orden, subtotal_orden, totalIVA_orden, total_orden, { ordenesRepository }) => {
  const ordenes = new Ordenes(id_orden, numero_orden, nombre_usuario, fecha_orden, subtotal_orden, totalIVA_orden, total_orden);
  return ordenesRepository.merge(ordenes);
};
