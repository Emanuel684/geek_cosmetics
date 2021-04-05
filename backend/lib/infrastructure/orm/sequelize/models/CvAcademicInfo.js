const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cv_academic_info', {
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
    program_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    program_type: {
      type: DataTypes.ENUM("Técnico","Tecnólogo","Pregrado","Posgrado","Curso","Seminario","Diplomado","Otro"),
      allowNull: true
    },
    inst_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id_inst_country: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'main_country',
        key: 'id'
      }
    },
    id_inst_city: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'main_city',
        key: 'id'
      }
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    finish_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    program_duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    intensity_hour: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pp_completed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pp_total: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_acad_certf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'main_files_manager',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'cv_academic_info',
    schema: 'cv',
    timestamps: false,
    indexes: [
      {
        name: "cv_academic_info_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
