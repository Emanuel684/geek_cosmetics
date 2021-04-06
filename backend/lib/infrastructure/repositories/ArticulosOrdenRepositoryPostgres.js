'use strict';

const sequelize = require('../orm/sequelize/sequelize');
const ArticulosOrden = require('../../domain/ArticulosOrden');
const ArticulosOrdenRepository = require('../../domain/ArticulosOrdenRepository');

module.exports = class extends ArticulosOrdenRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('articulos_orden');
  }

  async persist(articulosordenEntity) {

    const { id_articulo, id_orden, cantidad_articulo } = articulosordenEntity;

    const seqArticulosOrden = await this.model.create({ id_articulo, id_orden, cantidad_articulo });

    let articulosorden = new ArticulosOrden(seqArticulosOrden.id_articulo_orden, seqArticulosOrden.id_articulo, seqArticulosOrden.id_orden, seqArticulosOrden.cantidad_articulo);

    return articulosorden

  }

  async merge(articulosordenEntity) {
    const seqArticulosOrden = await this.model.findByPk(articulosordenEntity.id_answer);

    if (!seqArticulosOrden) return false;

    const { id_articulo, id_orden, cantidad_articulo } = articulosordenEntity;
    await seqArticulosOrden.update({ id_articulo, id_orden, cantidad_articulo },  {where: {id_articulo_orden: articulosordenEntity.id_articulo_orden}});

    return new ArticulosOrden(seqArticulosOrden.id_articulo_orden, seqArticulosOrden.id_articulo, seqArticulosOrden.id_orden, seqArticulosOrden.cantidad_articulo);
  }

  async remove(id_articulo_orden) {
    const seqArticulosOrden = await this.model.findByPk(id_articulo_orden);
    if (seqArticulosOrden) {
      return seqArticulosOrden.destroy();
    }
    return false;
  }

  async get(id_articulo_orden) {
    const seqArticulosOrden = await this.model.findByPk(id_articulo_orden);
    if(seqArticulosOrden)
      return new ArticulosOrden(seqArticulosOrden.id_articulo_orden, seqArticulosOrden.id_articulo, seqArticulosOrden.id_orden, seqArticulosOrden.cantidad_articulo);
    else
      return false;
  }

  async find() {
    const seqArticulosOrden = await this.model.findAll();
    return seqArticulosOrden.map((seqArticulosOrden) => {
      let data = new ArticulosOrden(seqArticulosOrden.id_articulo_orden, seqArticulosOrden.id_articulo, seqArticulosOrden.id_orden, seqArticulosOrden.cantidad_articulo);
      return data;
    });
  }

};