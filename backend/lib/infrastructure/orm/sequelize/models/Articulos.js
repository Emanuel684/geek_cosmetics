const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articulos', {
    id_articulo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion_articulo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    existencia: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'articulos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "articulos_pkey",
        unique: true,
        fields: [
          { name: "id_articulo" },
        ]
      },
    ]
  });
};
