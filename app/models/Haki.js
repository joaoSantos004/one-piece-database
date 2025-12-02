module.exports = (sequelize, DataTypes) => {
  const Haki = sequelize.define(
    'Haki',
    {
      haki_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      haki_type: {
        type: DataTypes.STRING(50), // Observation, Armament, Conqueror
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'Haki',
      timestamps: false,
    }
  );

  return Haki;
};
