'use strict';

module.exports = class {

  constructor(id_orden, numero_orden, nombre_usuario, fecha_orden, subtotal_orden, totalIVA_orden, total_orden) {
    this.id_orden = id_orden;
    this.numero_orden = numero_orden;
    this.nombre_usuario = nombre_usuario;
    this.fecha_orden = fecha_orden;
    this.subtotal_orden = subtotal_orden;
    this.totalIVA_orden = totalIVA_orden;
    this.total_orden = total_orden
  }

};