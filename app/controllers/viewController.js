const { sequelize } = require('../models');

exports.getCharacterCrewView = async (req, res) => {
  try {
    const [rows] = await sequelize.query('SELECT * FROM CharacterCrew');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch CharacterCrew view' });
  }
};