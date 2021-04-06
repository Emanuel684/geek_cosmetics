const ArticulosController = require('../controllers/ArticulosController');

module.exports = {
  name: 'articulos',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'POST',
        path: '/articulos',
        handler: ArticulosController.createArticulo,
        options: {
          description: 'Create a articulo',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/articulos',
        handler: ArticulosController.findArticulos,
        config: {
          description: 'List all articulos',
          tags: ['api'],
        }
      },
      {
        method: 'GET',
        path: '/articulos/{id_articulo}',
        handler: ArticulosController.getArticulo,
        options: {
          description: 'Get a articulo for {id_articulo}',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/articulos/{id_articulo}',
        handler: ArticulosController.deleteArticulo,
        options: {
          description: 'Delete a articulo',
          tags: ['api'],
        },
      },
      {
        method: 'PUT',
        path: '/articulos/{id_articulo}',
        handler: ArticulosController.updateArticulo,
        options: {
          description: 'Update an existing articulo',
          tags: ['api'],
        },
      }
    ]);
  }
};