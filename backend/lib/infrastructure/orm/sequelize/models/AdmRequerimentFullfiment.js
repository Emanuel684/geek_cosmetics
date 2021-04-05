const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_requeriment_fullfiment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_prospect: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adm_prospects_preference',
        key: 'id'
      }
    },
    id_detailed_req: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adm_detailed_requeriment',
        key: 'id'
      }
    },
    'url_validation ': {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_file_validation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'main_files_manager',
        key: 'id'
      }
    },
    'upload_date ': {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'adm_requeriment_fullfiment',
    schema: 'adm',
    timestamps: false,
    indexes: [
      {
        name: "adm_requeriment_fullfiment_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
