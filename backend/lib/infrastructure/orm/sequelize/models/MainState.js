const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('main_state', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    state_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_country: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'main_country',
        key: 'id'
      }
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'main_state',
    schema: 'main',
    timestamps: false,
    indexes: [
      {
        name: "main_state_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
