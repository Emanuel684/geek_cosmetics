'use strict';

const Ordenes = require('../../../domain/Ordenes');

module.exports = async (numero_orden, nombre_usuario, fecha_orden, subtotal_orden, totalIVA_orden, total_orden, { ordenesRepository }) => {
  
  const ordenes_data = new Ordenes(null, numero_orden, nombre_usuario, fecha_orden, subtotal_orden, totalIVA_orden, total_orden);
  return ordenesRepository.persist(ordenes_data);
};
