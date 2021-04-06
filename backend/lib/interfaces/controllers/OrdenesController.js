'use strict';

const Boom = require('@hapi/boom');
const CreateOrden = require('../../application/use_cases/ordenes/CreateOrden');
const UpdateOrden = require('../../application/use_cases/ordenes/UpdateOrden');
const GetOrden = require('../../application/use_cases/ordenes/GetOrden');
const DeleteOrden = require('../../application/use_cases/ordenes/DeleteOrden');
const ListOrdenes = require('../../application/use_cases/ordenes/ListOrdenes');

module.exports = {

  async createOrden(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { numero_orden, nombre_usuario, fecha_orden, subtotal_orden, totalIVA_orden, total_orden } = request.payload;

    try {
      // Treatment
      const orden = await CreateOrden( numero_orden, nombre_usuario, fecha_orden, subtotal_orden, totalIVA_orden, total_orden, serviceLocator);

      // Output
      return serviceLocator.ordenesSerializer.serialize(orden);

    } catch (error) {
      let message = "An internal server error occurred"
      if (error.parent != undefined && error.parent.constraint == "uq_email_auth_user")
        message = "This email is already registered"
      else
        console.log(error);
      return h.response({ statusCode: 500, error: "Internal Server Error", mensaje: message }).code(500)
    }
  },

  
  async updateOrden(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_orden = request.params.id_orden;
    const { numero_orden, nombre_usuario, fecha_orden, subtotal_orden, totalIVA_orden, total_orden } = request.payload;

    // Treatment
  
    const orden = await UpdateOrden(id_orden, numero_orden, nombre_usuario, fecha_orden, subtotal_orden, totalIVA_orden, total_orden, serviceLocator);
  
    // Output
    if (orden) {
      return serviceLocator.ordenesSerializer.serialize(orden);
    } else {
      return Boom.notFound('Orden not found');
    }
  },

  async findOrdenes(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Treatment
    const data_orden = await ListOrdenes(serviceLocator);

    // Output
    return data_orden.map(serviceLocator.ordenesSerializer.serialize)
  },

  async getOrden(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_orden = request.params.id_orden;

    // Treatment
    const orden = await GetOrden(id_orden, serviceLocator);

    // Output
    if (!orden) {
      return Boom.notFound('Orden not found');
    }

    return serviceLocator.ordenesSerializer.serialize(orden);
  },

  async deleteOrden(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const id_orden = request.params.id_orden;

    // Treatment
    await DeleteOrden(id_orden, serviceLocator);

    // Output
    return h.response().code(204);
  },


};
