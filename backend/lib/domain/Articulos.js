'use strict';

module.exports = class {

  constructor(id_articulo, descripcion_articulo, precio, existencia) {
    this.id_articulo = id_articulo;
    this.descripcion_articulo = descripcion_articulo;
    this.precio = precio;
    this.existencia = existencia
  }

};