const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tt_tests_students', {
    id_test_students: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_test: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tt_tests',
        key: 'id_test'
      }
    },
    id_prospect_preferent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_prospects_preference',
        key: 'id'
      }
    },
    id_aut_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'auth_users',
        key: 'id'
      }
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_send: {
      type: DataTypes.DATE,
      allowNull: true
    },
    final_score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    state_test: {
      type: DataTypes.ENUM("Asignada","En curso","Aprobada","Reprobada"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_tests_students',
    schema: 'tt',
    timestamps: false,
    indexes: [
      {
        name: "tt_test_students_pkey",
        unique: true,
        fields: [
          { name: "id_test_students" },
        ]
      },
    ]
  });
};
