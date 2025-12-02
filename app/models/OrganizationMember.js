module.exports = (sequelize, DataTypes) => {
  const OrganizationMember = sequelize.define(
    'OrganizationMember',
    {
      organization_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      character_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      role: {
        type: DataTypes.STRING(50), // Captain, Admiral, etc.
      },
      status: {
        type: DataTypes.STRING(30),
      },
    },
    {
      tableName: 'OrganizationMember',
      timestamps: false,
    }
  );

  return OrganizationMember;
};
