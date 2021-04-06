'use strict';

const sequelize = require('../orm/sequelize/sequelize');
const Articulos = require('../../domain/Articulos');
const ArticulosRepository = require('../../domain/ArticulosRepository');

module.exports = class extends ArticulosRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('articulos');
  }

  async persist(articulosEntity) {

    const { descripcion_articulo, precio, existencia } = articulosEntity;

    const seqArticulos = await this.model.create({ descripcion_articulo, precio, existencia });

    let articulos = new Articulos(seqArticulos.id_answer, seqArticulos.descripcion_articulo, seqArticulos.precio, seqArticulos.existencia);

    return articulos

  }

  async merge(articulosEntity) {
    const seqArticulos = await this.model.findByPk(articulosEntity.id_articulo);

    if (!seqArticulos) return false;

    const { descripcion_articulo, precio, existencia } = articulosEntity;
    await seqArticulos.update({ descripcion_articulo, precio, existencia },  {where: {id_articulo: articulosEntity.id_articulo}});

    return new Articulos(seqArticulos.id_articulo, seqArticulos.descripcion_articulo, seqArticulos.precio, seqArticulos.existencia);
  }

  async remove(id_articulo) {
    const seqArticulos = await this.model.findByPk(id_articulo);
    if (seqArticulos) {
      return seqArticulos.destroy();
    }
    return false;
  }

  async get(id_articulo) {
    const seqArticulos = await this.model.findByPk(id_articulo);
    if(seqArticulos)
      return new Articulos(seqArticulos.id_articulo, seqArticulos.descripcion_articulo, seqArticulos.precio, seqArticulos.existencia);
    else
      return false;
  }

  async find() {
    const seqArticulos = await this.model.findAll();
    return seqArticulos.map((seqArticulos) => {
      let data = new Articulos(seqArticulos.id_articulo, seqArticulos.descripcion_articulo, seqArticulos.precio, seqArticulos.existencia);
      return data;
    });
  }

};