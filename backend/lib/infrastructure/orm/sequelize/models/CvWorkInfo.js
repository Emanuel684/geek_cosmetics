const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cv_work_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cv_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cv_personal_info',
        key: 'id'
      }
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    company_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_company_city: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'main_city',
        key: 'id'
      }
    },
    position: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    finish_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_work_certf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'main_files_manager',
        key: 'id'
      }
    },
    vinculation_status: {
      type: DataTypes.ENUM("Vinculado","Culminado"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cv_work_info',
    schema: 'cv',
    timestamps: false,
    indexes: [
      {
        name: "cv_work_info_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
