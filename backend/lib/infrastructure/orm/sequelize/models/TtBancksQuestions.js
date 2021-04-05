const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tt_bancks_questions', {
    id_question: {
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
    id_topic_question: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tt_topics',
        key: 'id_topic'
      }
    },
    id_img_question: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'main_files_manager',
        key: 'id'
      }
    },
    description_question: {
      type: DataTypes.TEXT,
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
    tableName: 'tt_bancks_questions',
    schema: 'tt',
    timestamps: false,
    indexes: [
      {
        name: "tt_bancks_questions_pkey",
        unique: true,
        fields: [
          { name: "id_question" },
        ]
      },
    ]
  });
};
