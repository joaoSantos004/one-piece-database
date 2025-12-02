module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    'Location',
    {
      location_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      location_type: {
        type: DataTypes.STRING(50), // island, sea, town, etc
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'Locations',
      timestamps: false,
    }
  );

  return Location;
};
