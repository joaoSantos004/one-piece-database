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
        unique: true, // UNIQUE: no two fruits with same name
      },
      fruit_type: {
        type: DataTypes.STRING(50), // Paramecia, Logia, Zoan
        allowNull: false,
      },
      sub_type: {
        type: DataTypes.STRING(50), // Mythical Zoan, Ancient Zoan, etc
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
