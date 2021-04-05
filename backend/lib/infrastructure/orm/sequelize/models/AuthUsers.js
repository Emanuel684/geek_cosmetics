const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "uq_email_auth_user"
    },
    pass: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    register_time: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_entry: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      references: {
        model: 'auth_user_status',
        key: 'id'
      }
    },
    admin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    upgrade_time: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mobile_phone: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'auth_users',
    schema: 'auth',
    timestamps: false,
    indexes: [
      {
        name: "auth_users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uq_email_auth_user",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
