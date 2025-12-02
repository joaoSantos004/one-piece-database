module.exports = (sequelize, DataTypes) => {
  const CharacterChapter = sequelize.define(
    'CharacterChapter',
    {
      character_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      chapter_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      importance: {
        type: DataTypes.STRING(20),
      },
    },
    {
      tableName: 'CharacterChapter',
      timestamps: false,
    }
  );

  return CharacterChapter;
};
