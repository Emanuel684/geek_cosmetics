'use strict';


const _serializeSingleArticulosOrden = (articulosorden) => {
  return {
    "id_articulo_orden" : articulosorden.id_articulo_orden,
    "id_articulo": articulosorden.id_articulo,
    "id_orden": articulosorden.id_orden,
    "cantidad_articulo": articulosorden.cantidad_articulo 
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null answers');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleArticulosOrden);
    }
    return _serializeSingleArticulosOrden(data);
  }

};