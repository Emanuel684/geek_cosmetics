const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('main_country', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    country_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cod_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'main_country',
    schema: 'main',
    timestamps: false,
    indexes: [
      {
        name: "main_country_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
