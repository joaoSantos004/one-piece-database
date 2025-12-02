const { Anime, Episode } = require('../models');

exports.createAnime = async (req, res) => {
  try {
    const anime = await Anime.create(req.body);
    res.status(201).json(anime);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create anime' });
  }
};

exports.getAnimeList = async (_req, res) => {
  try {
    const list = await Anime.findAll();
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch anime list' });
  }
};

// READ ONE (with episodes)
exports.getAnimeById = async (req, res) => {
  try {
    const anime = await Anime.findByPk(req.params.id, {
      include: [{ model: Episode }],
    });

    if (!anime) {
      return res.status(404).json({ error: 'Anime not found' });
    }

    res.json(anime);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch anime' });
  }
};

// UPDATE
exports.updateAnime = async (req, res) => {
  try {
    const anime = await Anime.findByPk(req.params.id);
    if (!anime) {
      return res.status(404).json({ error: 'Anime not found' });
    }

    await anime.update(req.body);
    res.json(anime);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to update anime' });
  }
};

// DELETE
exports.deleteAnime = async (req, res) => {
  try {
    const anime = await Anime.findByPk(req.params.id);
    if (!anime) {
      return res.status(404).json({ error: 'Anime not found' });
    }

    await anime.destroy();
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete anime' });
  }
};
