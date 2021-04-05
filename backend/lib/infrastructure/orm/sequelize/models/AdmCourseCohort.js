const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_course_cohort', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_course: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_courses',
        key: 'id'
      }
    },
    cohort_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    max_members: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'adm_course_cohort',
    schema: 'adm',
    timestamps: false,
    indexes: [
      {
        name: "adm_course_cohort_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
