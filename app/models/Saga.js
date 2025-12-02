module.exports = (sequelize, DataTypes) => {
  const Saga = sequelize.define(
    'Saga',
    {
      saga_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'Sagas',
      timestamps: false,
    }
  );

  return Saga;
};
