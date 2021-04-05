const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_user_roles', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'auth_users',
        key: 'id'
      }
    },
    id_role: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'auth_roles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'auth_user_roles',
    schema: 'auth',
    timestamps: false,
    indexes: [
      {
        name: "auth_user_roles_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
