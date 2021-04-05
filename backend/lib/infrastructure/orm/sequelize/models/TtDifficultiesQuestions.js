const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tt_difficulties_questions', {
    id_difficulty: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_category: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    points_question: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_creation: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tt_difficulties_questions',
    schema: 'tt',
    timestamps: false,
    indexes: [
      {
        name: "tt_difficulties_questions_pkey",
        unique: true,
        fields: [
          { name: "id_difficulty" },
        ]
      },
    ]
  });
};
