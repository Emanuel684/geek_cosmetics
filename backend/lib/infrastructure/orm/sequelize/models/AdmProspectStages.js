const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_prospect_stages', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_prospect_preference: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adm_prospects_preference',
        key: 'id'
      },
      unique: "adm_prospect_stages_id_prospect_preference_key"
    },
    id_stage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'main_stage',
        key: 'id'
      },
      unique: "adm_prospect_stages_id_stage_key"
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    achievement_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'adm_prospect_stages',
    schema: 'adm',
    timestamps: false,
    indexes: [
      {
        name: "adm_prospect_stages_id_prospect_preference_key",
        unique: true,
        fields: [
          { name: "id_prospect_preference" },
        ]
      },
      {
        name: "adm_prospect_stages_id_stage_key",
        unique: true,
        fields: [
          { name: "id_stage" },
        ]
      },
      {
        name: "adm_prospect_stages_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
