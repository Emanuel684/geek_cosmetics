const ArticulosOrdeneController = require('../controllers/ArticulosOrdenController');

module.exports = {
  name: 'articulos_orden',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'POST',
        path: '/articulos_orden',
        handler: ArticulosOrdeneController.createArticulos_orden,
        options: {
          description: 'Create a articulo_orden',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/articulos_orden',
        handler: ArticulosOrdeneController.findArticulos_orden,
        config: {
          description: 'List all answers',
          tags: ['api'],
        }
      },
      {
        method: 'GET',
        path: '/articulos_orden/{id_articulo_orden}',
        handler: ArticulosOrdeneController.getArticulos_orden,
        options: {
          description: 'Get a option for {id_articulo_orden}',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/articulos_orden/{id_articulo_orden}',
        handler: ArticulosOrdeneController.deleteArticulos_orden,
        options: {
          description: 'Delete a articulo_orden',
          tags: ['api'],
        },
      },
      {
        method: 'PUT',
        path: '/articulos_orden/{id_articulo_orden}',
        handler: ArticulosOrdeneController.updateArticulos_orden,
        options: {
          description: 'Update an existing articulo_orden',
          tags: ['api'],
        },
      }
    ]);
  }
};