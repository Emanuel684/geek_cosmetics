'use strict';

const Boom = require('@hapi/boom');
const CreateArticulo = require('../../application/use_cases/articulos/CreateArticulo');
const UpdateArticulo = require('../../application/use_cases/articulos/UpdateArticulo');
const GetArticulo = require('../../application/use_cases/articulos/GetArticulo');
const DeleteArticulo = require('../../application/use_cases/articulos/DeleteArticulo');
const ListArticulos = require('../../application/use_cases/articulos/ListArticulos');

module.exports = {

  async createArticulo(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { descripcion_articulo, precio, existencia } = request.payload;

    try {
      // Treatment
      const articulo = await CreateArticulo( descripcion_articulo, precio, existencia, serviceLocator);

      // Output
      return serviceLocator.articulosSerializer.serialize(articulo);

    } catch (error) {
      let message = "An internal server error occurred"
      if (error.parent != undefined && error.parent.constraint == "uq_email_auth_user")
        message = "This email is already registered"
      else
        console.log(error);
      return h.response({ statusCode: 500, error: "Internal Server Error", mensaje: message }).code(500)
    }
  },

  
  async updateArticulo(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_articulo = request.params.id_articulo;
    const { descripcion_articulo, precio, existencia } = request.payload;

    // Treatment
  
    const articulo = await UpdateArticulo(id_articulo, descripcion_articulo, precio, existencia, serviceLocator);
  
    // Output
    if (articulo) {
      return serviceLocator.articulosSerializer.serialize(articulo);
    } else {
      return Boom.notFound('Articulo not found');
    }
  },

  async findArticulos(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const data_articulo = await ListArticulos(serviceLocator);

    // Output
    return data_articulo.map(serviceLocator.articulosSerializer.serialize)
  },

  async getArticulo(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_articulo = request.params.id_articulo;

    // Treatment
    const articulo = await GetArticulo(id_articulo, serviceLocator);

    // Output
    if (!articulo) {
      return Boom.notFound('Articulo not found');
    }

    return serviceLocator.articulosSerializer.serialize(articulo);
  },

  async deleteArticulo(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_articulo = request.params.id_articulo;

    // Treatment
    await DeleteArticulo(id_articulo, serviceLocator);

    // Output
    return h.response().code(204);
  },


};
