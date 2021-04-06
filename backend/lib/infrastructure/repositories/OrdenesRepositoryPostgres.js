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

    const { numero_orden, nombre_usuario, fecha_orden, subtotal_orden, totalIVA_orden, total_orden } = ordenesEntity;

    const seqOrdenes = await this.model.create({ numero_orden, nombre_usuario, fecha_orden, subtotal_orden, totalIVA_orden, total_orden });

    let ordenes = new Ordenes(seqOrdenes.id_orden, seqOrdenes.numero_orden, seqOrdenes.nombre_usuario, seqOrdenes.fecha_orden, seqOrdenes.subtotal_orden, seqOrdenes.totalIVA_orden, seqOrdenes.total_orden);

    return ordenes

  }

  async merge(ordenesEntity) {
    const seqOrdenes = await this.model.findByPk(ordenesEntity.id_orden);

    if (!seqOrdenes) return false;

    const { numero_orden, nombre_usuario, fecha_orden, subtotal_orden, totalIVA_orden, total_orden } = ordenesEntity;
    await seqOrdenes.update({ numero_orden, nombre_usuario, fecha_orden, subtotal_orden, totalIVA_orden, total_orden },  {where: {id_orden: ordenesEntity.id_orden}});

    return new Ordenes(seqOrdenes.id_orden, seqOrdenes.numero_orden, seqOrdenes.nombre_usuario, seqOrdenes.fecha_orden, seqOrdenes.subtotal_orden, seqOrdenes.totalIVA_orden, total_orden);
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
      return new Ordenes(seqOrdenes.id_orden, seqOrdenes.numero_orden, seqOrdenes.nombre_usuario, seqOrdenes.fecha_orden, seqOrdenes.subtotal_orden, seqOrdenes.totalIVA_orden, seqOrdenes.total_orden);
    else
      return false;
  }

  async find() {
    const seqOrdenes = await this.model.findAll();
    return seqOrdenes.map((seqOrdenes) => {
      let data = new Ordenes(seqOrdenes.id_orden, seqOrdenes.numero_orden, seqOrdenes.nombre_usuario, seqOrdenes.fecha_orden, seqOrdenes.subtotal_orden, seqOrdenes.totalIVA_orden, seqOrdenes.total_orden);
      return data;
    });
  }

};