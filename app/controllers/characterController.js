const {
  Character,
  Location,
  Organization,
  DevilFruit,
  Haki,
  Episode,
  Chapter,
} = require('../models');

// CREATE
exports.createCharacter = async (req, res) => {
  try {
    const character = await Character.create(req.body);
    res.status(201).json(character);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create character' });
  }
};

// READ ALL
exports.getCharacters = async (req, res) => {
  try {
    const characters = await Character.findAll({ limit: 100 });
    res.json(characters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch characters' });
  }
};

// READ ONE
exports.getCharacterDetails = async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.id, {
      include: [
        { model: Location },
        { model: Organization },    
        { model: DevilFruit },    
        { model: Haki },         
        { model: Episode },       
        { model: Chapter }, 
      ],
    });

    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }

    res.json(character);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch character' });
  }
};

// UPDATE
exports.updateCharacter = async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.id);
    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }

    await character.update(req.body);
    res.json(character);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to update character' });
  }
};

// DELETE
exports.deleteCharacter = async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.id);
    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }

    await character.destroy();
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete character' });
  }
};
