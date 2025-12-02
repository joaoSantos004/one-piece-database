module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define(
    'Organization',
    {
      organization_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      org_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true, // UNIQUE constraint for project requirement
      },
      org_type: {
        type: DataTypes.STRING(50), // Pirate Crew, Marines, Warlord Group, etc
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(30),
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'Organizations',
      timestamps: false,
      indexes: [
        {
          name: 'idx_org_type', // extra INDEX for project requirement
          fields: ['org_type'],
        },
      ],
    }
  );

  return Organization;
};
