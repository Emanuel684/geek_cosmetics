const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('main_languages', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    language_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'main_languages',
    schema: 'main',
    timestamps: false,
    indexes: [
      {
        name: "main_languages_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
