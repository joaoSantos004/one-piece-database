const { Manga, Chapter } = require('../models');

// CREATE
exports.createManga = async (req, res) => {
  try {
    const manga = await Manga.create(req.body);
    res.status(201).json(manga);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create manga' });
  }
};

// READ ALL
exports.getMangaList = async (_req, res) => {
  try {
    const list = await Manga.findAll();
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch manga list' });
  }
};

// READ ONE (with chapters)
exports.getMangaById = async (req, res) => {
  try {
    const manga = await Manga.findByPk(req.params.id, {
      include: [{ model: Chapter }],
    });

    if (!manga) {
      return res.status(404).json({ error: 'Manga not found' });
    }

    res.json(manga);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch manga' });
  }
};

// UPDATE
exports.updateManga = async (req, res) => {
  try {
    const manga = await Manga.findByPk(req.params.id);
    if (!manga) {
      return res.status(404).json({ error: 'Manga not found' });
    }

    await manga.update(req.body);
    res.json(manga);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to update manga' });
  }
};

// DELETE
exports.deleteManga = async (req, res) => {
  try {
    const manga = await Manga.findByPk(req.params.id);
    if (!manga) {
      return res.status(404).json({ error: 'Manga not found' });
    }

    await manga.destroy();
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete manga' });
  }
};
