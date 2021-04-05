const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('main_city', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    city_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_state: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'main_state',
        key: 'id'
      }
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'main_city',
    schema: 'main',
    timestamps: false,
    indexes: [
      {
        name: "main_city_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
