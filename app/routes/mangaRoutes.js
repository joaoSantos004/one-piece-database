const express = require('express');
const controller = require('../controllers/mangaController');

const router = express.Router();

router.post('/', controller.createManga);
router.get('/', controller.getMangaList);
router.get('/:id', controller.getMangaById);
router.put('/:id', controller.updateManga);
router.delete('/:id', controller.deleteManga);

module.exports = router;
