const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_permissions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    permission_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'auth_permissions',
    schema: 'auth',
    timestamps: false,
    indexes: [
      {
        name: "auth_permissions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
