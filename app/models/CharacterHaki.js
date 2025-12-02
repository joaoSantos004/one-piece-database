module.exports = (sequelize, DataTypes) => {
  const CharacterHaki = sequelize.define(
    'CharacterHaki',
    {
      character_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      haki_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      proficiency_level: {
        type: DataTypes.STRING(50), // Basic, Advanced, Mastered
      },
    },
    {
      tableName: 'CharacterHaki',
      timestamps: false,
    }
  );

  return CharacterHaki;
};
