module.exports = (sequelize, DataTypes) => {
  const DevilFruit = sequelize.define(
    'DevilFruit',
    {
      fruit_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      fruit_type: {
        type: DataTypes.STRING(50), 
        allowNull: false,
      },
      sub_type: {
        type: DataTypes.STRING(50),
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'DevilFruits',
      timestamps: false,
    }
  );

  return DevilFruit;
};
