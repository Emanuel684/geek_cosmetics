const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('main_files_manager', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_auth_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'auth_users',
        key: 'id'
      }
    },
    file: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assigned: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    uq_file: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'main_files_manager',
    schema: 'main',
    timestamps: false,
    indexes: [
      {
        name: "main_files_manager_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
