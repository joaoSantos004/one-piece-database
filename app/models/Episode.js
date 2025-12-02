module.exports = (sequelize, DataTypes) => {
  const Episode = sequelize.define(
    'Episode',
    {
      episode_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      anime_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      arc_id: {
        type: DataTypes.INTEGER,
      },
      episode_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(200),
      },
      air_date: {
        type: DataTypes.DATE,
      },
      synopsis: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'Episodes',
      timestamps: false,
    }
  );

  return Episode;
};
