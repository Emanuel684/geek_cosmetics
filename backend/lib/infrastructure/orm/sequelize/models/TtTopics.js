const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tt_topics', {
    id_topic: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_topic: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    description_topic: {
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
    tableName: 'tt_topics',
    schema: 'tt',
    timestamps: false,
    indexes: [
      {
        name: "tt_topics_pkey",
        unique: true,
        fields: [
          { name: "id_topic" },
        ]
      },
    ]
  });
};
