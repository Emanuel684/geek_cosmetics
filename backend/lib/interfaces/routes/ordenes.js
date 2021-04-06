const OrdenesController = require('../controllers/OrdenesController');

module.exports = {
  name: 'ordenes',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'POST',
        path: '/ordenes',
        handler: OrdenesController.createOrden,
        options: {
          description: 'Create a orden',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/ordenes',
        handler: OrdenesController.findOrdenes,
        config: {
          description: 'List all ordenes',
          tags: ['api'],
        }
      },
      {
        method: 'GET',
        path: '/ordenes/{id_orden}',
        handler: OrdenesController.getOrden,
        options: {
          description: 'Get a orden for {id_orden}',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/ordenes/{id_orden}',
        handler: OrdenesController.deleteOrden,
        options: {
          description: 'Delete a orden',
          tags: ['api'],
        },
      },
      {
        method: 'PUT',
        path: '/ordenes/{id_orden}',
        handler: OrdenesController.updateOrden,
        options: {
          description: 'Update an existing orden',
          tags: ['api'],
        },
      }
    ]);
  }
};