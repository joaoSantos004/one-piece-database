const { sequelize } = require('../models');

exports.getHighBountyCharacters = async (req, res) => {
  try {
    const min = Number(req.query.min) || 1000000000;

    const result = await sequelize.query(
      'CALL GetCharactersByMinBounty(:min_bounty)',
      {
        replacements: { min_bounty: min },
        type: sequelize.QueryTypes.SELECT
      }
    );


    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to call stored procedure' });
  }
};
