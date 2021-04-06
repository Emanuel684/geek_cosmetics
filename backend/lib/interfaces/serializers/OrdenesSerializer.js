'use strict';


const _serializeSingleOrden = (orden) => {
  return {
    "id_orden" : orden.id_orden, 
    "numero_orden" : orden.numero_orden,
    "nombre_usuario": orden.nombre_usuario,
    "fecha_orden": orden.fecha_orden,
    "subtotal_orden": orden.subtotal_orden,
    "totalIVA_orden": orden.totalIVA_orden,
    "total_orden": orden.total_orden
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null orden');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleOrden);
    }
    return _serializeSingleOrden(data);
  }

};