'use strict';


const _serializeSingleArticulo = (articulo) => {
  return {
    "id_articulo" : articulo.id_articulo, 
    "descripcion_articulo": articulo.descripcion_articulo,
    "precio": articulo.precio,
    "existencia": articulo.existencia
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null answers');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleArticulo);
    }
    return _serializeSingleArticulo(data);
  }

};