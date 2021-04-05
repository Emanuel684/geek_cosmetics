const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_courses_requeriments', {
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
    'concept ': {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    register_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'adm_courses_requeriments',
    schema: 'adm',
    timestamps: false,
    indexes: [
      {
        name: "adm_courses_requeriments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
