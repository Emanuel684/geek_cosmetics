const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tt_answers', {
    id_answer: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_option: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tt_options',
        key: 'id_option'
      }
    },
    id_test_person: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tt_tests_students',
        key: 'id_test_students'
      }
    },
    date_registration: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_answers',
    schema: 'tt',
    timestamps: false,
    indexes: [
      {
        name: "tt_answers_pkey",
        unique: true,
        fields: [
          { name: "id_answer" },
        ]
      },
    ]
  });
};
