const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_detailed_requeriment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_courses_requeriments: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adm_courses_requeriments',
        key: 'id'
      }
    },
    'requeriment_name ': {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    URL_source: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    'evidence_type ': {
      type: DataTypes.ENUM("URL","File","Ambos"),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'adm_detailed_requeriment',
    schema: 'adm',
    timestamps: false,
    indexes: [
      {
        name: "adm_detailed_requeriment_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
