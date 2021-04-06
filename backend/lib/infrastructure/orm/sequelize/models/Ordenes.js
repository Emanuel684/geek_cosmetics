const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordenes', {
    id_orden: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numero_orden: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "uq_numero_orden_ordenes"
    },
    nombre_usuario: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    fecha_orden: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    subtotal_orden: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    totalIVA_orden: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    total_orden: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ordenes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ordenes_pkey",
        unique: true,
        fields: [
          { name: "id_orden" },
        ]
      },
      {
        name: "uq_numero_orden_ordenes",
        unique: true,
        fields: [
          { name: "numero_orden" },
        ]
      },
    ]
  });
};
