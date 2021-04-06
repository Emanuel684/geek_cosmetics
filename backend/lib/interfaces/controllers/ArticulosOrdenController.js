'use strict';

const Boom = require('@hapi/boom');
const CreateArticulos_orden = require('../../application/use_cases/articulos_orden/CreateArticulos_orden');
const UpdateArticulos_orden = require('../../application/use_cases/articulos_orden/UpdateArticulos_orden');
const GetArticulos_orden = require('../../application/use_cases/articulos_orden/GetArticulos_orden');
const DeleteArticulos_orden = require('../../application/use_cases/articulos_orden/DeleteArticulos_orden');
const ListArticulos_orden = require('../../application/use_cases/articulos_orden/ListArticulos_orden');

module.exports = {

  async createArticulos_orden(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { id_articulo, id_orden, cantidad_articulo } = request.payload;

    try {
      // Treatment
      const articulos_orden = await CreateArticulos_orden( id_articulo, id_orden, cantidad_articulo, serviceLocator);

      // Output
      return serviceLocator.articulosordenSerializer.serialize(articulos_orden);

    } catch (error) {
      let message = "An internal server error occurred"
      if (error.parent != undefined && error.parent.constraint == "uq_email_auth_user")
        message = "This email is already registered"
      else
        console.log(error);
      return h.response({ statusCode: 500, error: "Internal Server Error", mensaje: message }).code(500)
    }
  },

  
  async updateArticulos_orden(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_articulo_orden = request.params.id_articulo_orden;
    const { id_articulo, id_orden, cantidad_articulo } = request.payload;

    // Treatment
  
    const articulos_orden = await UpdateArticulos_orden(id_articulo_orden, id_articulo, id_orden, cantidad_articulo, serviceLocator);
  
    // Output
    if (articulos_orden) {
      return serviceLocator.articulosordenSerializer.serialize(articulos_orden);
    } else {
      return Boom.notFound('Answer not found');
    }
  },

  async findArticulos_orden(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const data_articulo_orden = await ListArticulos_orden(serviceLocator);

    // Output
    return data_articulo_orden.map(serviceLocator.articulosordenSerializer.serialize)
  },

  async getArticulos_orden(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_articulo_orden = request.params.id_articulo_orden;

    // Treatment
    const articulo_orden = await GetArticulos_orden(id_articulo_orden, serviceLocator);

    // Output
    if (!articulo_orden) {
      return Boom.notFound('Answer not found');
    }

    return serviceLocator.articulosordenSerializer.serialize(articulo_orden);
  },

  async deleteArticulos_orden(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_articulo_orden = request.params.id_articulo_orden;

    // Treatment
    await DeleteArticulos_orden(id_articulo_orden, serviceLocator);

    // Output
    return h.response().code(204);
  },


};
