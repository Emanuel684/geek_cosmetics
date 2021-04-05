const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_partners', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    partner_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    contact_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    contact_phone: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    contact_email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    partnership_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("activo","inactivo"),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'adm_partners',
    schema: 'adm',
    timestamps: false,
    indexes: [
      {
        name: "adm_partners_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
