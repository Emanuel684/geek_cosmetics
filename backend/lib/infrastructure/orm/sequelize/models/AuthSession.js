const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_session', {
    sid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    sess: {
      type: DataTypes.JSON,
      allowNull: false
    },
    expire: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'auth_session',
    schema: 'auth',
    timestamps: false,
    indexes: [
      {
        name: "IDX_session_expire",
        fields: [
          { name: "expire" },
        ]
      },
      {
        name: "session_pkey",
        unique: true,
        fields: [
          { name: "sid" },
        ]
      },
    ]
  });
};
