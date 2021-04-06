const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articulos_orden', {
    id_articulo_orden: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_articulo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'articulos',
        key: 'id_articulo'
      }
    },
    id_orden: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ordenes',
        key: 'id_orden'
      }
    },
    cantidad_articulo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'articulos_orden',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "articulos_orden_pkey",
        unique: true,
        fields: [
          { name: "id_articulo_orden" },
        ]
      },
    ]
  });
};
