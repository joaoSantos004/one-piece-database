const { Episode, Anime, StoryArc, Character } = require('../models');

// CREATE
exports.createEpisode = async (req, res) => {
  try {
    const episode = await Episode.create(req.body);
    res.status(201).json(episode);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create episode' });
  }
};

// READ ALL
exports.getEpisodes = async (_req, res) => {
  try {
    const eps = await Episode.findAll({ limit: 200 });
    res.json(eps);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch episodes' });
  }
};

// READ ONE (with anime, arc, characters)
exports.getEpisodeById = async (req, res) => {
  try {
    const episode = await Episode.findByPk(req.params.id, {
      include: [
        { model: Anime },
        { model: StoryArc },
        { model: Character },
      ],
    });

    if (!episode) {
      return res.status(404).json({ error: 'Episode not found' });
    }

    res.json(episode);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch episode' });
  }
};

// UPDATE
exports.updateEpisode = async (req, res) => {
  try {
    const episode = await Episode.findByPk(req.params.id);
    if (!episode) {
      return res.status(404).json({ error: 'Episode not found' });
    }

    await episode.update(req.body);
    res.json(episode);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to update episode' });
  }
};

// DELETE
exports.deleteEpisode = async (req, res) => {
  try {
    const episode = await Episode.findByPk(req.params.id);
    if (!episode) {
      return res.status(404).json({ error: 'Episode not found' });
    }

    await episode.destroy();
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete episode' });
  }
};
