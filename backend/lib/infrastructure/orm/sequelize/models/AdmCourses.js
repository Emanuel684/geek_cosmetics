const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_courses', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    course_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    course_desc: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    url_info: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    exit_profile: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("activo","inactivo"),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'adm_courses',
    schema: 'adm',
    timestamps: false,
    indexes: [
      {
        name: "adm_courses_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
