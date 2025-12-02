module.exports = (sequelize, DataTypes) => {
  const CharacterDevilFruit = sequelize.define(
    'CharacterDevilFruit',
    {
      character_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      fruit_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      is_current_user: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: 'CharacterDevilFruit',
      timestamps: false,
    }
  );

  return CharacterDevilFruit;
};
