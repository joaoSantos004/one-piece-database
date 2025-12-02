const { Chapter, Manga, StoryArc, Character } = require('../models');

// CREATE
exports.createChapter = async (req, res) => {
  try {
    const chapter = await Chapter.create(req.body);
    res.status(201).json(chapter);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create chapter' });
  }
};

// READ ALL
exports.getChapters = async (_req, res) => {
  try {
    const chapters = await Chapter.findAll({ limit: 200 });
    res.json(chapters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch chapters' });
  }
};

// READ ONE (with manga, arc, characters)
exports.getChapterById = async (req, res) => {
  try {
    const chapter = await Chapter.findByPk(req.params.id, {
      include: [
        { model: Manga },
        { model: StoryArc },
        { model: Character },
      ],
    });

    if (!chapter) {
      return res.status(404).json({ error: 'Chapter not found' });
    }

    res.json(chapter);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch chapter' });
  }
};

// UPDATE
exports.updateChapter = async (req, res) => {
  try {
    const chapter = await Chapter.findByPk(req.params.id);
    if (!chapter) {
      return res.status(404).json({ error: 'Chapter not found' });
    }

    await chapter.update(req.body);
    res.json(chapter);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to update chapter' });
  }
};

// DELETE
exports.deleteChapter = async (req, res) => {
  try {
    const chapter = await Chapter.findByPk(req.params.id);
    if (!chapter) {
      return res.status(404).json({ error: 'Chapter not found' });
    }

    await chapter.destroy();
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete chapter' });
  }
};
