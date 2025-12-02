const { Haki, Character } = require('../models');

// CREATE
exports.createHaki = async (req, res) => {
  try {
    const haki = await Haki.create(req.body);
    res.status(201).json(haki);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create haki type' });
  }
};

// READ ALL
exports.getHakiTypes = async (_req, res) => {
  try {
    const hakiList = await Haki.findAll();
    res.json(hakiList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch haki types' });
  }
};

// READ ONE (with characters)
exports.getHakiById = async (req, res) => {
  try {
    const haki = await Haki.findByPk(req.params.id, {
      include: [{ model: Character }],
    });

    if (!haki) {
      return res.status(404).json({ error: 'Haki type not found' });
    }

    res.json(haki);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch haki type' });
  }
};

// UPDATE
exports.updateHaki = async (req, res) => {
  try {
    const haki = await Haki.findByPk(req.params.id);
    if (!haki) {
      return res.status(404).json({ error: 'Haki type not found' });
    }

    await haki.update(req.body);
    res.json(haki);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to update haki type' });
  }
};

// DELETE
exports.deleteHaki = async (req, res) => {
  try {
    const haki = await Haki.findByPk(req.params.id);
    if (!haki) {
      return res.status(404).json({ error: 'Haki type not found' });
    }

    await haki.destroy();
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete haki type' });
  }
};
