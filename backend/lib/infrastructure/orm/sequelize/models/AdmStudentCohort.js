const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_student_cohort', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_prospect_student: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adm_prospects_preference',
        key: 'id'
      }
    },
    id_cohort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adm_course_cohort',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'adm_student_cohort',
    schema: 'adm',
    timestamps: false,
    indexes: [
      {
        name: "adm_student_cohort_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
