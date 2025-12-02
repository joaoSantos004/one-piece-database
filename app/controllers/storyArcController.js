const { StoryArc, Saga, Episode, Chapter } = require('../models');

// CREATE
exports.createStoryArc = async (req, res) => {
  try {
    const arc = await StoryArc.create(req.body);
    res.status(201).json(arc);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create story arc' });
  }
};

// READ ALL
exports.getStoryArcs = async (_req, res) => {
  try {
    const arcs = await StoryArc.findAll();
    res.json(arcs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch story arcs' });
  }
};

// READ ONE (with saga, episodes, chapters)
exports.getStoryArcById = async (req, res) => {
  try {
    const arc = await StoryArc.findByPk(req.params.id, {
      include: [
        { model: Saga },
        { model: Episode },
        { model: Chapter },
      ],
    });

    if (!arc) {
      return res.status(404).json({ error: 'Story arc not found' });
    }

    res.json(arc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch story arc' });
  }
};

// UPDATE
exports.updateStoryArc = async (req, res) => {
  try {
    const arc = await StoryArc.findByPk(req.params.id);
    if (!arc) {
      return res.status(404).json({ error: 'Story arc not found' });
    }

    await arc.update(req.body);
    res.json(arc);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to update story arc' });
  }
};

// DELETE
exports.deleteStoryArc = async (req, res) => {
  try {
    const arc = await StoryArc.findByPk(req.params.id);
    if (!arc) {
      return res.status(404).json({ error: 'Story arc not found' });
    }

    await arc.destroy();
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete story arc' });
  }
};
