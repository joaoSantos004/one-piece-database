const { Saga, StoryArc } = require('../models');

// CREATE
exports.createSaga = async (req, res) => {
  try {
    const saga = await Saga.create(req.body);
    res.status(201).json(saga);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create saga' });
  }
};

// READ ALL
exports.getSagas = async (_req, res) => {
  try {
    const sagas = await Saga.findAll();
    res.json(sagas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch sagas' });
  }
};

// READ ONE (with arcs)
exports.getSagaById = async (req, res) => {
  try {
    const saga = await Saga.findByPk(req.params.id, {
      include: [{ model: StoryArc }],
    });

    if (!saga) {
      return res.status(404).json({ error: 'Saga not found' });
    }

    res.json(saga);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch saga' });
  }
};

// UPDATE
exports.updateSaga = async (req, res) => {
  try {
    const saga = await Saga.findByPk(req.params.id);
    if (!saga) {
      return res.status(404).json({ error: 'Saga not found' });
    }

    await saga.update(req.body);
    res.json(saga);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to update saga' });
  }
};

// DELETE
exports.deleteSaga = async (req, res) => {
  try {
    const saga = await Saga.findByPk(req.params.id);
    if (!saga) {
      return res.status(404).json({ error: 'Saga not found' });
    }

    await saga.destroy();
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete saga' });
  }
};
