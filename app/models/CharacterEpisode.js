module.exports = (sequelize, DataTypes) => {
  const CharacterEpisode = sequelize.define(
    'CharacterEpisode',
    {
      character_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      episode_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      importance: {
        type: DataTypes.STRING(20), // Main, Supporting, Cameo
      },
    },
    {
      tableName: 'CharacterEpisode',
      timestamps: false,
    }
  );

  return CharacterEpisode;
};
