module.exports = (sequelize, DataTypes) => {
  const Chapter = sequelize.define(
    'Chapter',
    {
      chapter_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      manga_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      arc_id: {
        type: DataTypes.INTEGER,
      },
      chapter_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(200),
      },
      release_date: {
        type: DataTypes.DATE,
      },
      summary: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'Chapters',
      timestamps: false,
    }
  );

  return Chapter;
};
