const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_user_status', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'auth_user_status',
    schema: 'auth',
    timestamps: false,
    indexes: [
      {
        name: "auth_user_status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
