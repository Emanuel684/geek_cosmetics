const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('main_interview_schedule', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cv_user: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_incharge: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'auth_users',
        key: 'id'
      }
    },
    interview_type: {
      type: DataTypes.ENUM("Entrevista","Reunión","Revisión","Retroalimentación"),
      allowNull: true
    },
    interview_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    result_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'main_interview_schedule',
    schema: 'main',
    timestamps: false,
    indexes: [
      {
        name: "main_interview_schedule_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
