const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_prospects_preference', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_course: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adm_courses',
        key: 'id'
      }
    },
    id_cv_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cv_personal_info',
        key: 'id'
      }
    },
    'regis_date ': {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    state: {
      type: DataTypes.ENUM("aprobado","reprobado","en revision"),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'adm_prospects_preference',
    schema: 'adm',
    timestamps: false,
    indexes: [
      {
        name: "adm_prospects_preference_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
