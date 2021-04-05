const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tt_difficulties_tests', {
    id_difficulty_test: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_difficulty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tt_difficulties_questions',
        key: 'id_difficulty'
      }
    },
    id_test: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tt_tests',
        key: 'id_test'
      }
    },
    number_questions: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_creation: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_update: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tt_difficulties_tests',
    schema: 'tt',
    timestamps: false,
    indexes: [
      {
        name: "tt_difficulties_tests_pkey",
        unique: true,
        fields: [
          { name: "id_difficulty_test" },
        ]
      },
    ]
  });
};
