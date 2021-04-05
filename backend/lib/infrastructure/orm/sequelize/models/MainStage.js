const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('main_stage', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stage_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    stage_process: {
      type: DataTypes.ENUM("Registro o enrolamiento","Perfilación o postulación","En proceso (Requerimientos)","En Prueba","En Entrevista","Becario","No Aceptado","Egresado","Egresado Asistente","En Deserción","No Completado"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'main_stage',
    schema: 'main',
    timestamps: false,
    indexes: [
      {
        name: "main_stage_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
