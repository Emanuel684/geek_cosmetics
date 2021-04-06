'use strict';

const sequelize = require('../orm/sequelize/sequelize');
const Ordenes = require('../../domain/Ordenes');
const OrdenesRepository = require('../../domain/OrdenesRepository');

module.exports = class extends OrdenesRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('ordenes');
  }

  async persist(ordenesEntity) {

    const { id_articulo, id_orden, cantidad_articulo } = ordenesEntity;

    const seqOrdenes = await this.model.create({ id_articulo, id_orden, cantidad_articulo });

    let ordenes = new Ordenes(seqOrdenes.id_orden, seqOrdenes.id_articulo, seqOrdenes.id_orden, seqOrdenes.cantidad_articul);

    return ordenes

  }

  async merge(ordenesEntity) {
    const seqOrdenes = await this.model.findByPk(ordenesEntity.id_orden);

    if (!seqOrdenes) return false;

    const { id_articulo, id_orden, cantidad_articulo } = ordenesEntity;
    await seqOrdenes.update({ id_articulo, id_orden, cantidad_articulo },  {where: {id_orden: ordenesEntity.id_orden}});

    return new Ordenes(seqOrdenes.id_orden, seqOrdenes.id_articulo, seqOrdenes.id_orden, seqOrdenes.cantidad_articulo);
  }

  async remove(id_orden) {
    const seqOrdenes = await this.model.findByPk(id_orden);
    if (seqOrdenes) {
      return seqOrdenes.destroy();
    }
    return false;
  }

  async get(id_orden) {
    const seqOrdenes = await this.model.findByPk(id_orden);
    if(seqOrdenes)
      return new Ordenes(seqOrdenes.id_orden, seqOrdenes.id_articulo, seqOrdenes.id_orden, seqOrdenes.cantidad_articulo);
    else
      return false;
  }

  async find() {
    const seqOrdenes = await this.model.findAll();
    return seqOrdenes.map((seqOrdenes) => {
      let data = new Answers(seqOrdenes.id_orden, seqOrdenes.id_articulo, seqOrdenes.id_orden, seqOrdenes.cantidad_articulo);
      return data;
    });
  }

};