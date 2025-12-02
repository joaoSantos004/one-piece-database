module.exports = (sequelize, DataTypes) => {
  const Anime = sequelize.define(
    'Anime',
    {
      anime_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      start_air_date: {
        type: DataTypes.DATE,
      },
      end_air_date: {
        type: DataTypes.DATE,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'Anime',
      timestamps: false,
    }
  );

  return Anime;
};
