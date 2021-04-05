const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tt_tests', {
    id_test: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_topic_test: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tt_topics',
        key: 'id_topic'
      }
    },
    name_test: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    description_test: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time_duration: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: true
    },
    password_test: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "uq_password_test"
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
    tableName: 'tt_tests',
    schema: 'tt',
    timestamps: false,
    indexes: [
      {
        name: "tt_tests_pkey",
        unique: true,
        fields: [
          { name: "id_test" },
        ]
      },
      {
        name: "uq_password_test",
        unique: true,
        fields: [
          { name: "password_test" },
        ]
      },
    ]
  });
};
