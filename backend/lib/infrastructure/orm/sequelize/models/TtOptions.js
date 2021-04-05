const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tt_options', {
    id_option: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_question: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tt_bancks_questions',
        key: 'id_question'
      }
    },
    id_img_option: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'main_files_manager',
        key: 'id'
      }
    },
    description_option: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    answer_option: {
      type: DataTypes.JSON,
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
    tableName: 'tt_options',
    schema: 'tt',
    timestamps: false,
    indexes: [
      {
        name: "tt_options_pkey",
        unique: true,
        fields: [
          { name: "id_option" },
        ]
      },
    ]
  });
};
