module.exports = (sequelize, DataTypes) => {
  const Manga = sequelize.define(
    'Manga',
    {
      manga_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING(100),
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'Manga',
      timestamps: false,
    }
  );

  return Manga;
};
