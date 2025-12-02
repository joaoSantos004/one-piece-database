const { DevilFruit, Character } = require('../models');

exports.createDevilFruit = async (req, res) => {
  try {
    const fruit = await DevilFruit.create(req.body);
    res.status(201).json(fruit);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create devil fruit' });
  }
};

exports.getDevilFruits = async (_req, res) => {
  try {
    const fruits = await DevilFruit.findAll();
    res.json(fruits);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch devil fruits' });
  }
};

exports.getDevilFruitById = async (req, res) => {
  try {
    const fruit = await DevilFruit.findByPk(req.params.id, {
      include: [{ model: Character }],
    });

    if (!fruit) {
      return res.status(404).json({ error: 'Devil fruit not found' });
    }

    res.json(fruit);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch devil fruit' });
  }
};

exports.updateDevilFruit = async (req, res) => {
  try {
    const fruit = await DevilFruit.findByPk(req.params.id);
    if (!fruit) {
      return res.status(404).json({ error: 'Devil fruit not found' });
    }

    await fruit.update(req.body);
    res.json(fruit);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to update devil fruit' });
  }
};

exports.deleteDevilFruit = async (req, res) => {
  try {
    const fruit = await DevilFruit.findByPk(req.params.id);
    if (!fruit) {
      return res.status(404).json({ error: 'Devil fruit not found' });
    }

    await fruit.destroy();
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete devil fruit' });
  }
};
