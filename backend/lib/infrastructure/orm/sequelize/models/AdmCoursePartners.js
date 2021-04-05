const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_course_partners', {
    id_partners: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adm_partners',
        key: 'id'
      },
      unique: "adm_course_partners_id_partners_key"
    },
    id_course_user_cohort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adm_course_cohort',
        key: 'id'
      },
      unique: "adm_course_partners_id_course_user_cohort_key"
    }
  }, {
    sequelize,
    tableName: 'adm_course_partners',
    schema: 'adm',
    timestamps: false,
    indexes: [
      {
        name: "adm_course_partners_id_course_user_cohort_key",
        unique: true,
        fields: [
          { name: "id_course_user_cohort" },
        ]
      },
      {
        name: "adm_course_partners_id_partners_key",
        unique: true,
        fields: [
          { name: "id_partners" },
        ]
      },
    ]
  });
};
