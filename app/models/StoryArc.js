module.exports = (sequelize, DataTypes) => {
  const StoryArc = sequelize.define(
    'StoryArc',
    {
      arc_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      saga_id: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      summary: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'StoryArcs',
      timestamps: false,
    }
  );

  return StoryArc;
};
