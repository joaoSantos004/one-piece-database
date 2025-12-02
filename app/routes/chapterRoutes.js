const express = require('express');
const controller = require('../controllers/chapterController');

const router = express.Router();

router.post('/', controller.createChapter);
router.get('/', controller.getChapters);
router.get('/:id', controller.getChapterById);
router.put('/:id', controller.updateChapter);
router.delete('/:id', controller.deleteChapter);

module.exports = router;
