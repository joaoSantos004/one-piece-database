module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define(
    'Character',
    {
      character_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      epithet: {
        type: DataTypes.STRING(150),
      },
      bounty: {
        type: DataTypes.BIGINT,
        validate: {
          min: 0,
        },
      },
      status: {
        type: DataTypes.STRING(30),
      },
      description: {
        type: DataTypes.TEXT,
      },
      location_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'Characters',
      timestamps: false,
    }
  );

  return Character;
};
