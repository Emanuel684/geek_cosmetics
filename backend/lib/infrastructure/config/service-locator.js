'use strict';

const constants = require('./constants');
const environment = require('./environment');
const ArticulosSerializer = require('../../interfaces/serializers/ArticulosSerializer');
const ArticulosOrdenSerializer = require('../../interfaces/serializers/ArticulosOrdenSerializer');
const OrdenesSerializer = require('../../interfaces/serializers/OrdenesSerializer');

function buildBeans() {

  const beans = {
    articulosSerializer: new ArticulosSerializer(),
    articulosordenSerializer: new ArticulosOrdenSerializer(),
    ordenesSerializer: new OrdenesSerializer()
  };

  if (environment.database.dialect === constants.SUPPORTED_DATABASE.IN_MEMORY) {
    const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory');
    beans.userRepository = new UserRepositoryInMemory();
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
    const UserRepositoryMongo = require('../repositories/UserRepositoryMongo');
    beans.userRepository = new UserRepositoryMongo();
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRES) {
    const ArticulosRepositoryPostgres = require('../repositories/ArticulosRepositoryPostgres');
    const ArticulosOrdenRepositoryPostgres = require('../repositories/ArticulosOrdenRepositoryPostgres');
    const OrdenesRepositoryPostgres = require('../repositories/OrdenesRepositoryPostgres');

    beans.articulosRepository = new ArticulosRepositoryPostgres();
    beans.articulosordenRepository = new ArticulosOrdenRepositoryPostgres();
    beans.ordenesRepository = new OrdenesRepositoryPostgres();
  } else {
    const UserRepositorySQLite= require('../repositories/UserRepositorySQLite');
    beans.userRepository = new UserRepositorySQLite();
  }

  return beans;
}

module.exports = buildBeans();
