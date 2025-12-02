module.exports = (sequelize, DataTypes) => {
  const Writer = sequelize.define(
    'Writer',
    {
      writer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      tableName: 'Writers',
      timestamps: false,
    }
  );

  return Writer;
};
